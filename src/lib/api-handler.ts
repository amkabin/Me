import { auth } from "@/lib/auth"
import { AppError } from "@/lib/api-errors"
import { error } from "@/lib/api-response"
import type { NextRequest } from "next/server"

type Handler<C = unknown> = (req: NextRequest, context: C) => Promise<Response>

export function withAuth<C>(handler: Handler<C>): Handler<C> {
  return async (req, context) => {
    const session = await auth()
    if (!session?.user) {
      return error("Unauthorized", 401)
    }
    return handler(req, context)
  }
}

export function withErrorHandler<C>(handler: Handler<C>): Handler<C> {
  return async (req, context) => {
    try {
      return await handler(req, context)
    } catch (err) {
      if (err instanceof AppError) {
        return error(err.message, err.status)
      }
      console.error("Unhandled error:", err)
      return error("Internal server error", 500)
    }
  }
}

const requestCounts = new Map<string, { count: number; resetAt: number }>()

export function withRateLimit(
  handler: Handler,
  maxRequests = 10,
  windowMs = 60000
): Handler {
  return async (req, context) => {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
    const now = Date.now()
    const record = requestCounts.get(ip)

    if (!record || now > record.resetAt) {
      requestCounts.set(ip, { count: 1, resetAt: now + windowMs })
    } else if (record.count >= maxRequests) {
      return error("Too many requests. Please try again later.", 429)
    } else {
      record.count++
    }

    return handler(req, context)
  }
}
