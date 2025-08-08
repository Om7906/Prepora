"use client"

import { useEffect, useRef, useState } from "react"
import { ChatMessage } from "./ChatMessage"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Sparkles } from "lucide-react"

type Message = { id: string; role: "user" | "assistant"; content: string; createdAt: number }

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
        "Hey! I’m Prepora, your competitive exam companion. Tell me your exam and target date. We’ll keep it calm and steady — and I’ll add energy when you need a push.\n\nSupported exams: CAT, GATE , JEE Main/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.",
      createdAt: Date.now()
    }
  ])
  const [input, setInput] = useState("")
  const [sending, setSending] = useState(false)
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSuggestion(text: string) {
    setInput(text)
    textareaRef.current?.focus()
  }

  async function handleSend() {
    const text = input.trim()
    if (!text) return
    setSending(true)
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: text, createdAt: Date.now() }
    setMessages((m) => [...m, userMsg])
    setInput("")
    setTimeout(() => {
      const reply: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        createdAt: Date.now(),
        content:
          "Got it. This is a visual demo for now. Soon I’ll remember your profile, check in on mood, and create daily plans.\n\nTry:\n• “Create a 2-hour plan for JEE today.”\n• “I have 60 days for CAT — plan my week.”\n• “I’m stressed — give me a light schedule.”"
      }
      setMessages((m) => [...m, reply])
      setSending(false)
    }, 500)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="anim-fade-in overflow-hidden border-border/70 shadow-sm">
      <CardContent className="flex h-[75vh] flex-col gap-0 p-0">
        {/* Suggestions */}
        <div className="anim-fade-in flex flex-wrap items-center gap-2 border-b border-border/70 bg-card p-3">
          <div className="mr-1 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Sparkles size={14} /> Try:
          </div>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => handleSuggestion(s)}
              className="chip rounded-full border border-border bg-muted px-3 py-1 text-xs hover:bg-muted/80"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.map((m) => (
            <ChatMessage key={m.id} role={m.role} content={m.content} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border/70 bg-card p-3">
          <div className="relative flex items-end gap-2 rounded-xl border border-border bg-background p-2">
            <textarea
              ref={textareaRef}
              placeholder="Type a message…  (Shift+Enter for new line)"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              disabled={sending}
              rows={1}
              className="max-h-40 w-full resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground"
              onInput={(e) => {
                const el = e.currentTarget
                el.style.height = "auto"
                el.style.height = `${el.scrollHeight}px`
              }}
            />
            <Button onClick={handleSend} disabled={sending || input.trim().length === 0} className="h-9 rounded-lg px-3" variant="soft">
              <span className="sr-only">Send</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
