import { getDB } from "@/lib/db"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const sql = getDB()
    if (!sql) {
      return NextResponse.json({ error: "Database not available" }, { status: 500 })
    }

    const posts = await sql`
      SELECT * FROM posts 
      ORDER BY created_at DESC
    `

    return NextResponse.json(posts)
  } catch (error) {
    console.error("[v0] Error fetching posts:", error)
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const sql = getDB()
    if (!sql) {
      return NextResponse.json({ error: "Database not available" }, { status: 500 })
    }

    const body = await request.json()
    const { title, content, author, type, video_url } = body

    const result = await sql`
      INSERT INTO posts (title, content, author, type, video_url, published, created_at)
      VALUES (${title}, ${content}, ${author}, ${type}, ${video_url || null}, false, NOW())
      RETURNING *
    `

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("[v0] Error creating post:", error)
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 })
  }
}
