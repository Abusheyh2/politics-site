import { neon } from "@neondatabase/serverless"

export function getDB() {
  const connectionString =
    process.env.NEON_NEON_DATABASE_URL || process.env.NEON_POSTGRES_URL || process.env.DATABASE_URL

  if (!connectionString) {
    // During build time, environment variables might not be available
    // Return a dummy function that will never be called during build
    console.warn("[v0] Database connection string not found - this is expected during build")
    return null as any
  }

  return neon(connectionString)
}
