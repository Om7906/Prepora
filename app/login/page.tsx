"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Stage = "email" | "code"

export default function LoginPage() {
  const router = useRouter()

  const [stage, setStage] = useState<Stage>("email")
  const [email, setEmail] = useState("")
  const [code, setCode] = useState("")
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [timer, setTimer] = useState(0) // resend cooldown (sec)

  useEffect(() => {
    if (stage === "code" && timer > 0) {
      const id = setInterval(() => setTimer((t) => Math.max(0, t - 1)), 1000)
      return () => clearInterval(id)
    }
  }, [stage, timer])

  function onlyDigits(v: string) {
    return v.replace(/\D/g, "").slice(0, 6)
  }

  async function handleSendCode() {
    setError(null)
    if (!email) return
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: true }
      })
      if (error) throw error
      setSent(true)
      setStage("code")
      setTimer(30)
    } catch (e: any) {
      // Common: Email OTP disabled → ask to enable in Supabase Email provider
      setError(e?.message ?? "Could not send code. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  async function handleVerify() {
    setError(null)
    if (code.length !== 6) {
      setError("Enter the 6‑digit code")
      return
    }
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: code,
        type: "email"
      })
      if (error) throw error
      // Signed in
      setTimeout(() => {
        router.push("/companion")
      }, 100)
    } catch (e: any) {
      setError(e?.message ?? "Invalid code. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  async function handleResend() {
    if (timer > 0) return
    setError(null)
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: true }
      })
      if (error) throw error
      setSent(true)
      setTimer(30)
    } catch (e: any) {
      setError(e?.message ?? "Could not resend code.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto mt-16 max-w-md rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
      <h1 className="mb-2 text-xl font-semibold">Sign in</h1>
      {stage === "email" && (
        <>
          <p className="mb-4 text-sm text-muted-foreground">
            Enter your email to get a 6‑digit code.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <Button onClick={handleSendCode} disabled={!email || loading}>
              {loading ? "Sending…" : "Send code"}
            </Button>
          </div>
          {sent && (
            <p className="mt-3 text-sm text-muted-foreground">
              Code sent. Check your inbox.
            </p>
          )}
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </>
      )}

      {stage === "code" && (
        <>
          <p className="mb-4 text-sm text-muted-foreground">
            We sent a 6‑digit code to <span className="font-medium">{email}</span>.
          </p>
          <div className="flex items-end gap-2">
            <Input
              inputMode="numeric"
              autoComplete="one-time-code"
              placeholder="Enter 6‑digit code"
              value={code}
              onChange={(e) => setCode(onlyDigits(e.target.value))}
              disabled={loading}
              className="tracking-widest"
            />
            <Button onClick={handleVerify} disabled={loading || code.length !== 6}>
              {loading ? "Verifying…" : "Verify & Sign in"}
            </Button>
          </div>
          <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
            <button
              className="underline underline-offset-4 disabled:no-underline disabled:opacity-50"
              onClick={handleResend}
              disabled={timer > 0 || loading}
              title={timer > 0 ? `Resend in ${timer}s` : "Resend code"}
            >
              {timer > 0 ? `Resend in ${timer}s` : "Resend code"}
            </button>
            <button
              className="underline underline-offset-4"
              onClick={() => {
                setStage("email")
                setCode("")
                setSent(false)
                setError(null)
              }}
            >
              Change email
            </button>
          </div>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </>
      )}
    </div>
  )
}
