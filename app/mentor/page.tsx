"use client"

import { ChatWindow } from "@/components/chat/ChatWindow"

export default function MentorPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-2xl font-semibold">Your Mentor</h1>
      <ChatWindow />
    </div>
  )
}
