"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"

type User = {
id: string
email?: string
}

export function AuthButton() {
const [user, setUser] = useState<User | null>(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
let mounted = true
supabase.auth.getUser().then(({ data }) => {
if (!mounted) return
setUser(data.user as User | null)
setLoading(false)
})
const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
setUser((session?.user as User) ?? null)
})
return () => {
mounted = false
sub?.subscription.unsubscribe()
}
}, [])

if (loading) return null

if (!user) {
return (
<a href="/login" className="text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground" >
Sign in
</a>
)
}

async function handleSignOut() {
await supabase.auth.signOut()
// Optional: refresh the page
window.location.href = "/"
}

return (
<div className="flex items-center gap-3">
<span className="text-xs text-muted-foreground">{user.email}</span>
<Button variant="secondary" className="h-8 px-3" onClick={handleSignOut}>
Sign out
</Button>
</div>
)
}
