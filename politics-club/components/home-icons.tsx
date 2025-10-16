"use client"

import { ArrowRight, Calendar, Users, MessageSquare, BookOpen } from "lucide-react"

export function ArrowRightIcon({ className }: { className?: string }) {
  return <ArrowRight className={className} />
}

export function CalendarIcon({ className }: { className?: string }) {
  return <Calendar className={className} />
}

export function UsersIcon({ className }: { className?: string }) {
  return <Users className={className} />
}

export function MessageSquareIcon({ className }: { className?: string }) {
  return <MessageSquare className={className} />
}

export function BookOpenIcon({ className }: { className?: string }) {
  return <BookOpen className={className} />
}
