"use client"

import { ChatWindow } from "@/components/chat/ChatWindow"

export default function CompanionPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-2xl font-semibold">Your Companion</h1>
      <ChatWindow />
    </div>
  )
}
