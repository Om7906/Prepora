import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400","500","600","700"] })

export const metadata: Metadata = {
  title: "Prepora — Your AI Exam Companion",
  description:
    "A calm, strategic, always-on companion for CAT, GATE, JEE Main/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.",
  icons: [{ rel: "icon", url: "/favicon.svg" }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">
            <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur">
              <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                  <img src="/logo.svg" alt="Prepora" className="h-6 w-6" />
                  <span className="text-sm font-semibold tracking-tight">Prepora</span>
                </Link>
                <div className="flex items-center gap-4">
                  <Link
                    href="/companion"
                    className="text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    Open Companion
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
            <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Prepora. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
