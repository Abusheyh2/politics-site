"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const res = await fetch("/api/posts")
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Failed to fetch posts")
      }
      const data = await res.json()
      setPosts(Array.isArray(data) ? data : [])
      setError(null)
    } catch (error) {
      console.error("[v0] Error fetching posts:", error)
      setError(error instanceof Error ? error.message : "Failed to load posts")
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  async function deletePost(id: string) {
    if (!confirm("Are you sure you want to delete this post?")) return

    try {
      await fetch(`/api/posts/${id}`, { method: "DELETE" })
      fetchPosts()
    } catch (error) {
      console.error("[v0] Error deleting post:", error)
    }
  }

  async function togglePublish(id: string, currentStatus: boolean) {
    try {
      const post = posts.find((p) => p.id === id)
      await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...post, published: !currentStatus }),
      })
      fetchPosts()
    } catch (error) {
      console.error("[v0] Error toggling publish:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12 flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="border-destructive">
            <CardHeader>
              <CardTitle className="text-destructive">Database Setup Required</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The posts table doesn't exist yet. You need to run the SQL script to create it.
              </p>
              <div className="bg-muted p-4 rounded-md mb-4">
                <p className="text-sm font-mono">scripts/create_posts_table.sql</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Run this script in your Neon database to create the posts table, then refresh this page.
              </p>
              <Button onClick={() => window.location.reload()}>Refresh Page</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">Admin Panel</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your Politics Club posts</p>
          </div>
          <Link href="/admin/new">
            <Button size="lg">Create New Post</Button>
          </Link>
        </div>

        {posts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">No posts yet. Create your first post!</p>
              <Link href="/admin/new">
                <Button>Create New Post</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {posts.map((post: any) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        By {post.author} • {new Date(post.created_at).toLocaleDateString()} • {post.type}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => togglePublish(post.id, post.published)}
                        variant={post.published ? "default" : "outline"}
                        size="sm"
                      >
                        {post.published ? "Published" : "Draft"}
                      </Button>
                      <Link href={`/admin/edit/${post.id}`}>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </Link>
                      <Button onClick={() => deletePost(post.id)} variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.content.substring(0, 150)}...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
