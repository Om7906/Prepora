import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeartHandshake, Gauge, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-12">
      <section className="rounded-2xl border border-border/70 bg-card p-12 shadow-sm">
        <div className="space-y-5">
          <h1 className="text-5xl font-semibold leading-tight tracking-tight">
            Meet Prepora — your AI Exam Companion
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground">
            Calm when you need care, energetic when you need a push. Built for CAT, GATE,
            JEE Main/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/companion">
              <Button className="h-11 px-6" variant="soft">Open Companion</Button>
            </Link>
            <a href="#how-it-works" className="text-sm text-muted-foreground underline underline-offset-4">
              How it works
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground">
            <HeartHandshake size={18} />
          </div>
          <h3 className="mb-1 font-semibold">Personal</h3>
          <p className="text-sm text-muted-foreground">
            Learns your background, schedule, and exam. Feels human, not robotic.
          </p>
        </div>
        <div className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground">
            <Gauge size={18} />
          </div>
          <h3 className="mb-1 font-semibold">Strategic</h3>
          <p className="text-sm text-muted-foreground">
            Daily plans that adapt with progress, mocks, and mood.
          </p>
        </div>
        <div className="rounded-xl border border-border/70 bg-card p-6 shadow-sm">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground">
            <Sparkles size={18} />
          </div>
          <h3 className="mb-1 font-semibold">Reliable</h3>
          <p className="text-sm text-muted-foreground">
            Works offline for today&apos;s plan and recent chats (coming soon).
          </p>
        </div>
      </section>
    </div>
  )
}
