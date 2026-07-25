import { createCrudHandlers } from "@/lib/crud"

const { list, create } = createCrudHandlers("skill")
export const GET = list
export const POST = create
