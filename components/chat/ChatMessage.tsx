import { cn } from "@/lib/utils"

type ChatMessageProps = {
  role: "user" | "assistant"
  content: string
  time?: string
}

export function ChatMessage({ role, content, time }: ChatMessageProps) {
  const isUser = role === "user"
  return (
    <div className={cn("flex w-full gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow">
          🤝
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm",
          isUser
            ? "rounded-br-none border border-border bg-white/80 dark:bg-white/10"
            : "rounded-bl-none bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
        )}
      >
        <p className="whitespace-pre-line leading-relaxed">{content}</p>
        {time ? <p className="mt-1 text-[10px] opacity-80">{time}</p> : null}
      </div>
      {isUser && (
        <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted">
          🧑
        </div>
      )}
    </div>
  )
}
