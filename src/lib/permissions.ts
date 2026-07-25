import { auth } from "@/lib/auth"

export async function isAdmin(): Promise<boolean> {
  const session = await auth()
  return !!session?.user
}

export async function requireAdmin(): Promise<void> {
  const admin = await isAdmin()
  if (!admin) {
    throw new Error("Unauthorized")
  }
}
