import { createCrudHandlers } from "@/lib/crud"

const { list, create } = createCrudHandlers("education")
export const GET = list
export const POST = create
