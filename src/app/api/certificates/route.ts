import { createCrudHandlers } from "@/lib/crud"

const { list, create } = createCrudHandlers("certificate")
export const GET = list
export const POST = create
