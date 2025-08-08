import Link from "next/link"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-10">
      <section className="rounded-lg border p-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Meet Prepora — your AI Exam Companion
        </h1>
        <p className="mt-3 text-muted-foreground">
          Calm when you need care, energetic when you need a push. Built for CAT, GATE, JEE Main/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/companion"
            className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Open Companion
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
        <div className="rounded-lg border p-6">
          <h3 className="mb-2 font-semibold">Personal</h3>
          <p className="text-sm text-muted-foreground">
            Adapts to your background, schedule, and exam. Feels human, not robotic.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="mb-2 font-semibold">Strategic</h3>
          <p className="text-sm text-muted-foreground">
            Daily plans that shift with progress, mocks, and mood.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <h3 className="mb-2 font-semibold">Reliable</h3>
          <p className="text-sm text-muted-foreground">
            Works offline for today&apos;s plan and recent chats (coming soon).
          </p>
        </div>
      </section>
    </div>
  )
}
