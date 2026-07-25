import { prisma } from "@/lib/db"
import { messageSchema } from "@/lib/validations"
import { success, error } from "@/lib/api-response"
import { sendContactNotification } from "@/lib/email"
import { withRateLimit, withErrorHandler } from "@/lib/api-handler"
import type { NextRequest } from "next/server"

async function handler(req: NextRequest) {
  const body = await req.json()

  const honeypot = body._hp
  if (honeypot) {
    return success({ ok: true })
  }

  const parsed = messageSchema.safeParse(body)
  if (!parsed.success) {
    return error(parsed.error.issues[0].message, 422)
  }

  const { name, email, subject, body: messageBody } = parsed.data

  await prisma.message.create({
    data: { name, email, subject, body: messageBody },
  })

  try {
    await sendContactNotification({ name, email, subject, body: messageBody })
  } catch {
    console.warn("Email notification failed, message saved to DB")
  }

  return success({ ok: true }, 201)
}

export const POST = withErrorHandler(withRateLimit(handler, 5, 60000))
