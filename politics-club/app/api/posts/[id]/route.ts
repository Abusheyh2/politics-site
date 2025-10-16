import { getDB } from "@/lib/db"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const sql = getDB()
    if (!sql) {
      return NextResponse.json({ error: "Database not available" }, { status: 500 })
    }

    const posts = await sql`
      SELECT * FROM posts WHERE id = ${params.id}
    `

    if (posts.length === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json(posts[0])
  } catch (error) {
    console.error("[v0] Error fetching post:", error)
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const sql = getDB()
    if (!sql) {
      return NextResponse.json({ error: "Database not available" }, { status: 500 })
    }

    const body = await request.json()
    const { title, content, author, type, video_url, published } = body

    const result = await sql`
      UPDATE posts 
      SET title = ${title}, 
          content = ${content}, 
          author = ${author}, 
          type = ${type}, 
          video_url = ${video_url || null},
          published = ${published}
      WHERE id = ${params.id}
      RETURNING *
    `

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("[v0] Error updating post:", error)
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const sql = getDB()
    if (!sql) {
      return NextResponse.json({ error: "Database not available" }, { status: 500 })
    }

    await sql`DELETE FROM posts WHERE id = ${params.id}`

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting post:", error)
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 })
  }
}
