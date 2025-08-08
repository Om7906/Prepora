"use client"

import { useEffect, useRef, useState } from "react"
import { ChatMessage } from "./ChatMessage"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  createdAt: number
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hey! I’m your Prepora companion. Tell me your exam and target date. We’ll build a calm, focused plan together — and I’ll add energy when you need a push. Supported exams: CAT, GATE (5 branches), JEE Main/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.",
      createdAt: Date.now()
    }
  ])
  const [input, setInput] = useState("")
  const [sending, setSending] = useState(false)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function handleSend() {
    const text = input.trim()
    if (!text) return
    setSending(true)
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      createdAt: Date.now()
    }
    setMessages((m) => [...m, userMsg])
    setInput("")

    // Simple local demo reply (no AI yet)
    setTimeout(() => {
      const reply: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        createdAt: Date.now(),
        content:
          "Got it. This is a demo chat for now. Next, I’ll remember your profile, check your mood, and generate daily plans. Try: “Create a 2-hour plan for JEE today.”"
      }
      setMessages((m) => [...m, reply])
      setSending(false)
    }, 400)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card>
      <CardContent className="flex h-[65vh] flex-col gap-4 p-4">
        <div className="flex-1 space-y-3 overflow-y-auto pr-2">
          {messages.map((m) => (
            <ChatMessage key={m.id} role={m.role} content={m.content} />
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Type your message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={sending}
          />
          <Button onClick={handleSend} disabled={sending || input.trim().length === 0}>
            {sending ? "Sending..." : "Send"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
