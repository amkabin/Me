import { success, error } from "@/lib/api-response"
import { withAuth, withErrorHandler } from "@/lib/api-handler"
import { uploadToCloudinary } from "@/lib/upload"
import type { NextRequest } from "next/server"

const upload = withErrorHandler(
  withAuth(async (req: NextRequest) => {
    if (!process.env.CLOUDINARY_URL) {
      return error("Cloudinary not configured", 501)
    }

    const formData = await req.formData()
    const file = formData.get("file") as File | null
    if (!file) return error("No file provided")

    const buffer = Buffer.from(await file.arrayBuffer())
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`

    const result = await uploadToCloudinary(base64)
    return success(result, 201)
  })
)

export const POST = upload
