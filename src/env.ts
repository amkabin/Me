import { z } from "zod"

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  AUTH_SECRET: z.string().min(32),
  RESEND_API_KEY: z.string().optional(),
  CLOUDINARY_URL: z.string().optional(),
  ADMIN_EMAIL: z.string().email().default("admin@example.com"),
  ADMIN_PASSWORD: z.string().min(6).default("admin123"),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
})

export const env = envSchema.parse(process.env)
