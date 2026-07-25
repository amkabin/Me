import { prisma } from "@/lib/db"

const defaults: Record<string, unknown> = {
  site_title: "Brian Philip | Aspiring Software Engineer",
  site_description: "Aspiring software engineer passionate about building modern web applications with React, Node.js, and TypeScript.",
  hero_name: "Brian Philip",
  hero_tagline: "Aspiring Software Engineer | Full-Stack Web Developer",
  hero_bio: "I am an aspiring software engineer passionate about building modern, responsive, and user-focused web applications. I enjoy creating clean interfaces, developing scalable backend systems, and continuously improving my skills through real-world projects.",
  about_content: [],
  footer_copyright: "Brian Philip. All rights reserved.",
  contact_email: "kavukuabrian@gmail.com",
  contact_phone: "+254 704 458 044",
}

export async function getSetting(key: string): Promise<string> {
  try {
    const setting = await prisma.siteSetting.findUnique({ where: { key } })
    if (!setting) return (defaults[key] as string) || ""
    const val = setting.value
    return typeof val === "string" ? val : JSON.stringify(val)
  } catch {
    return (defaults[key] as string) || ""
  }
}

export async function getSettingJson<T>(key: string): Promise<T | null> {
  try {
    const setting = await prisma.siteSetting.findUnique({ where: { key } })
    if (!setting) return null
    return setting.value as T
  } catch {
    return null
  }
}
