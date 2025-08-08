"use client"

import { useEffect, useRef, useState } from "react"
import { ChatMessage } from "./ChatMessage"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Sparkles, LogIn } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

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
        "Hey, I'm Prepora, Your AI Exam companion. Tell me your exam and target date. We’ll keep it calm and steady — and I’ll add energy when you need a push.\n\nSupported exams: CAT, GATE, JEE Main/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.",
      createdAt: Date.now()
    }
  ])
  const [input, setInput] = useState("")
  const [sending, setSending] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  // Get current user and load messages (last 50)
  useEffect(() => {
    let mounted = true
    ;(async () => {
      const { data } = await supabase.auth.getUser()
      const uid = data.user?.id ?? null
      if (!mounted) return
      setUserId(uid)
      if (uid) {
        const { data: rows, error } = await supabase
          .from("messages")
          .select("id, role, content, created_at")
          .eq("user_id", uid)
          .order("created_at", { ascending: true })
          .limit(50)
        if (!error && rows && rows.length > 0) {
          const mapped = rows.map((r) => ({
            id: r.id as string,
            role: r.role as "user" | "assistant",
            content: r.content as string,
            createdAt: new Date(r.created_at as string).getTime()
          }))
          // Keep initial greeting only if there were no previous messages
          setMessages((prev) => (prev.length === 1 ? [prev[0], ...mapped] : mapped))
        }
      }
    })()

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user?.id ?? null)
    })
    return () => {
      mounted = false
      sub?.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSuggestion(text: string) {
    setInput(text)
    textareaRef.current?.focus()
  }

  async function saveMessage(uid: string, role: "user" | "assistant", content: string) {
    await supabase.from("messages").insert({ user_id: uid, role, content })
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

    if (userId) {
      await saveMessage(userId, "user", text)
    }

    // Demo reply (AI comes in Module 7)
    const reply: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      createdAt: Date.now(),
      content:
        "Noted. This is a visual demo right now. Soon I’ll remember your profile, check in on mood, and create daily plans.\n\nTry:\n• “Create a 2-hour plan for JEE today.”\n• “I have 60 days for CAT — plan my week.”\n• “I’m stressed — give me a light schedule.”"
    }

    await new Promise((r) => setTimeout(r, 500))
    setMessages((m) => [...m, reply])

    if (userId) {
      await saveMessage(userId, "assistant", reply.content)
    }

    setSending(false)
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="anim-fade-in card-hover overflow-hidden border-border/70 shadow-sm">
      <CardContent className="flex h-[75vh] flex-col gap-0 p-0">
        {/* Suggestions + signed-in hint */}
        <div className="anim-fade-in flex flex-wrap items-center justify-between gap-2 border-b border-border/70 bg-card p-3">
          <div className="flex flex-wrap items-center gap-2">
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
          {!userId && (
            <a
              href="/login"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted/80"
              title="Sign in to save your chats"
            >
              <LogIn size={14} /> Sign in to save
            </a>
          )}
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
            <Button
              onClick={handleSend}
              disabled={sending || input.trim().length === 0}
              className="pressable h-9 rounded-lg px-3"
              variant="soft"
            >
              <span className="sr-only">Send</span>
              <Send size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
