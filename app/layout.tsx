import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prepora — Your AI Exam Companion",
  description: "A calm, strategic, always-on companion for CAT, GATE, JEE Mains/Advanced, NEET, SSC CGL, SSC JE, and UPSC CSE.",
  icons: [{ rel: "icon", url: "/favicon.svg" }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">
            <header className="sticky top-0 border-b bg-background/80 backdrop-blur">
              <div className="container mx-auto flex h-14 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                  <img src="/logo.svg" alt="Prepora" className="h-6 w-6" />
                  <span className="font-semibold">Prepora</span>
                </Link>
                <div className="flex items-center gap-4">
                  <Link href="/companion" className="text-sm underline underline-offset-4">
                    Open Companion
                  </Link>
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="container mx-auto px-4 py-6">{children}</main>
            <footer className="border-t py-6 text-center text-sm opacity-75">
              © {new Date().getFullYear()} Prepora. All rights reserved.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
