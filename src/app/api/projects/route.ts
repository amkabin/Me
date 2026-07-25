import { createCrudHandlers } from "@/lib/crud"

const { list, create } = createCrudHandlers("project")
export const GET = list
export const POST = create
