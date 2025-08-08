import { cn } from "@/lib/utils"

type ChatMessageProps = { role: "user" | "assistant"; content: string; time?: string }

export function ChatMessage({ role, content, time }: ChatMessageProps) {
  const isUser = role === "user"
  return (
    <div className={cn("anim-fade-up flex w-full gap-3 leading-relaxed", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border/70 bg-card text-[10px] font-medium text-muted-foreground">
          P
        </div>
      )}
      <div
        className={cn(
          "max-w-[78%] rounded-2xl border px-4 py-2 text-sm shadow-sm transition-colors",
          isUser
            ? "rounded-br-none border-border/70 bg-card"
            : "rounded-bl-none border-border/60 bg-muted"
        )}
      >
        <p className="whitespace-pre-line">{content}</p>
        {time ? <p className="mt-1 text-[10px] text-muted-foreground">{time}</p> : null}
      </div>
      {isUser && (
        <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border/70 bg-card text-[10px] font-medium text-muted-foreground">
          U
        </div>
      )}
    </div>
  )
}
