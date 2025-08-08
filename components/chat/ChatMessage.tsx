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
        <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
          🤝
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-3 py-2 text-sm",
          isUser
            ? "rounded-br-none bg-primary text-primary-foreground"
            : "rounded-bl-none bg-muted text-foreground"
        )}
      >
        <p className="whitespace-pre-line">{content}</p>
        {time ? <p className="mt-1 text-[10px] opacity-70">{time}</p> : null}
      </div>
      {isUser && (
        <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted">
          🧑
        </div>
      )}
    </div>
  )
}
