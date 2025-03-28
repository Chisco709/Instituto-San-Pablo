import { UserRole } from "@/drizzle/schema"

export function canAccesAdminPages({ role } : { role: UserRole | undefined }) {
    return role === "admin"
}