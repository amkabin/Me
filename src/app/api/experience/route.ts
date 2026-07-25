import { createCrudHandlers } from "@/lib/crud"

const { list, create } = createCrudHandlers("experience")
export const GET = list
export const POST = create
