import { cn } from "@/lib/utils"

type ChatMessageProps = {
  role: "user" | "assistant"
  content: string
  time?: string
}

export function ChatMessage({ role, content, time }: ChatMessageProps) {
  const isUser = role === "user"

  return (
    <div className={cn("flex w-full gap-3 leading-relaxed", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-teal-400 text-[11px] font-semibold text-white shadow">
          P
        </div>
      )}

      <div
        className={cn(
          "max-w-[80%] rounded-2xl border px-4 py-2 text-sm shadow-sm",
          isUser
            ? "rounded-br-none border-border/70 bg-background"
            : "rounded-bl-none border-border/60 bg-muted/60"
        )}
      >
        <p className="whitespace-pre-line">{content}</p>
        {time ? <p className="mt-1 text-[10px] text-muted-foreground">{time}</p> : null}
      </div>

      {isUser && (
        <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-muted text-[11px] font-semibold text-foreground/70">
          U
        </div>
      )}
    </div>
  )
}
