import { createCrudHandlers } from "@/lib/crud"

const { getById, update, remove } = createCrudHandlers("experience")
export const GET = getById
export const PATCH = update
export const DELETE = remove
