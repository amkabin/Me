import { createCrudHandlers } from "@/lib/crud"

const { list, create } = createCrudHandlers("blogPost")
export const GET = list
export const POST = create
