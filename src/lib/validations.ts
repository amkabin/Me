import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export const projectSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(200).optional(),
  description: z.string().min(1).max(1000),
  content: z.string().optional(),
  image: z.string().url().optional().or(z.literal("")),
  tags: z.array(z.string()).default([]),
  liveUrl: z.string().url().optional().or(z.literal("")),
  githubUrl: z.string().url().optional().or(z.literal("")),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
})

export const skillSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional().or(z.literal("")),
  category: z.string().min(1).max(100),
  icon: z.string().optional().or(z.literal("")),
  order: z.number().int().default(0),
  published: z.boolean().default(true),
})

export const experienceSchema = z.object({
  company: z.string().min(1).max(200),
  role: z.string().min(1).max(200),
  description: z.string().optional().or(z.literal("")),
  startDate: z.string().min(1),
  endDate: z.string().optional().or(z.literal("")),
  current: z.boolean().default(false),
  location: z.string().max(200).optional().or(z.literal("")),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
})

export const educationSchema = z.object({
  institution: z.string().min(1).max(200),
  degree: z.string().min(1).max(200),
  field: z.string().max(200).optional().or(z.literal("")),
  startDate: z.string().min(1),
  endDate: z.string().optional().or(z.literal("")),
  description: z.string().optional().or(z.literal("")),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
})

export const certificateSchema = z.object({
  title: z.string().min(1).max(200),
  issuer: z.string().min(1).max(200),
  date: z.string().optional().or(z.literal("")),
  url: z.string().url().optional().or(z.literal("")),
  image: z.string().url().optional().or(z.literal("")),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
})

export const blogPostSchema = z.object({
  title: z.string().min(1).max(200),
  slug: z.string().min(1).max(200).optional(),
  excerpt: z.string().max(500).optional().or(z.literal("")),
  body: z.any().optional(),
  coverImage: z.string().url().optional().or(z.literal("")),
  readTime: z.number().int().optional(),
  published: z.boolean().default(false),
  categoryIds: z.array(z.string()).default([]),
  tagIds: z.array(z.string()).default([]),
})

export const messageSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(254),
  subject: z.string().max(200).optional().or(z.literal("")),
  body: z.string().min(10).max(5000),
})

export const siteSettingSchema = z.object({
  key: z.string().min(1).max(100),
  value: z.any(),
})

export const socialLinkSchema = z.object({
  platform: z.string().min(1).max(100),
  url: z.string().min(1).max(500),
  icon: z.string().max(100).optional().or(z.literal("")),
  order: z.number().int().default(0),
})

export const mediaSchema = z.object({
  url: z.string().min(1),
  publicId: z.string().optional().or(z.literal("")),
  width: z.number().int().optional(),
  height: z.number().int().optional(),
  format: z.string().optional().or(z.literal("")),
  fileSize: z.number().int().optional(),
  altText: z.string().max(500).optional().or(z.literal("")),
})
