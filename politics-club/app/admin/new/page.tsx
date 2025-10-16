"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function NewPostPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: formData.get("author") as string,
      type: formData.get("post_type") as string,
      video_url: formData.get("media_url") as string,
      published: formData.get("published") === "on",
    }

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        router.push("/admin")
      } else {
        alert("Failed to create post")
      }
    } catch (error) {
      console.error("[v0] Error creating post:", error)
      alert("Failed to create post")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Link href="/admin">
            <Button variant="outline">← Back to Admin</Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Create New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Enter post title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your post content here..."
                  rows={12}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" name="author" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="post_type">Post Type</Label>
                  <select
                    id="post_type"
                    name="post_type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="article">Article</option>
                    <option value="video">Video</option>
                    <option value="announcement">Announcement</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="media_url">Media URL (Optional)</Label>
                <Input id="media_url" name="media_url" placeholder="Image URL or YouTube embed link" type="url" />
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="published" name="published" className="h-4 w-4 rounded border-gray-300" />
                <Label htmlFor="published" className="font-normal">
                  Publish immediately
                </Label>
              </div>

              <div className="flex gap-4">
                <Button type="submit" size="lg" className="flex-1" disabled={loading}>
                  {loading ? "Creating..." : "Create Post"}
                </Button>
                <Link href="/admin" className="flex-1">
                  <Button type="button" variant="outline" size="lg" className="w-full bg-transparent">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
