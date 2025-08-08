"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
const [email, setEmail] = useState("")
const [sent, setSent] = useState(false)
const [error, setError] = useState<string | null>(null)
const disabled = !email || sent

async function handleSend() {
setError(null)
try {
const { error } = await supabase.auth.signInWithOtp({
email,
options: { emailRedirectTo: ${window.location.origin}/companion }
})
if (error) throw error
setSent(true)
} catch (e: any) {
setError(e?.message ?? "Something went wrong")
}
}

return (
<div className="mx-auto mt-16 max-w-md rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
<h1 className="mb-2 text-xl font-semibold">Sign in</h1>
<p className="mb-4 text-sm text-muted-foreground">
Enter your email. We’ll send you a magic link to sign in.
</p>
<div className="flex gap-2">
<Input
type="email"
placeholder="you@example.com"
value={email}
onChange={(e) => setEmail(e.target.value)}
disabled={sent}
/>
<Button onClick={handleSend} disabled={disabled}>
{sent ? "Sent" : "Send link"}
</Button>
</div>
{sent && (
<p className="mt-3 text-sm text-muted-foreground">
Check your inbox. Click the link to return to Prepora.
</p>
)}
{error && <p className="mt-3 text-sm text-red-600">{error}</p>}
</div>
)
}
