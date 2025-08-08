"use client"

import { useEffect, useRef, useState } from "react"
import { ChatMessage } from "./ChatMessage"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Sparkles } from "lucide-react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  createdAt: number
}

const suggestions = [
  "Create a 2-hour plan for JEE today",
  "I have 60 days for CAT",
  "Feeling low — short plan?"
]

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Hey! I’m your Prepora companion. Tell me your exam and target date. We’ll build a calm, focused plan together — and I’ll add energy when you need a push.\n\nSupported exams: CAT, GATE (5 branches), JEE Main/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.",
      createdAt: Date.now()
    }
  ])
  const [input, setInput] = useState("")
  const [sending, setSending] = useState(false)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSuggestion(text: string) {
    setInput(text)
  }

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
          "Got it. This is a demo chat for now. Next, I’ll remember your profile, check your mood, and generate daily plans.\n\nTry one of these:\n• “Create a 2-hour plan for JEE today.”\n• “I have 60 days for CAT — plan my week.”\n• “I’m stressed — give me a light schedule.”"
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
    <Card className="overflow-hidden">
      <CardContent className="flex h-[70vh] flex-col gap-4 p-0">
        {/* Suggestion chips */}
        <div className="flex flex-wrap items-center gap-2 border-b bg-card/60 p-3 backdrop-blur">
          <div className="mr-1 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Sparkles size={14} /> Try:
          </div>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSuggestion(s)}
              className="rounded-full border bg-white/70 px-3 py-1 text-xs hover:bg-white/90 dark:bg-white/10 dark:hover:bg-white/15"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((m) => (
            <ChatMessage key={m.id} role={m.role} content={m.content} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="border-t bg-card/70 p-3 backdrop-blur">
          <div className="relative flex items-center gap-2 rounded-full border bg-background/80 p-1 pl-4">
            <Input
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={sending}
              className="h-11 rounded-full border-none focus-visible:ring-0"
            />
            <Button
              onClick={handleSend}
              disabled={sending || input.trim().length === 0}
              className="mr-1 h-10 w-10 rounded-full"
              variant="gradient"
              aria-label="Send"
              title="Send"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
