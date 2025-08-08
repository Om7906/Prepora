import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeartHandshake, Gauge, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <section className="rounded-2xl border bg-white/70 p-8 shadow-sm backdrop-blur dark:bg-white/5">
        <h1 className="text-4xl font-bold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Meet Prepora — your AI Exam Companion
          </span>
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Calm when you need care, energetic when you need a push. Built for CAT, GATE, JEE Main/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/companion">
            <Button variant="gradient">Open Companion</Button>
          </Link>
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground underline underline-offset-4"
          >
            How it works
          </a>
        </div>
      </section>

      <section id="how-it-works" className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
            <HeartHandshake size={18} />
          </div>
          <h3 className="mb-1 font-semibold">Personal</h3>
          <p className="text-sm text-muted-foreground">
            Learns your background, schedule, and exam. Feels human, not robotic.
          </p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
            <Gauge size={18} />
          </div>
          <h3 className="mb-1 font-semibold">Strategic</h3>
          <p className="text-sm text-muted-foreground">
            Daily plans that adapt with progress, mocks, and mood.
          </p>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300">
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
