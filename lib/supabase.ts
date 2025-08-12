import { createClient, SupabaseClient } from '@supabase/supabase-js'

/**
 * Create a Supabase client if the required environment variables are present.
 * The client is typed to use any schema and is used both on the server and
 * client.  When no keys are provided the function returns `undefined`,
 * signalling that the application should fall back to filesystem data.
 */
export function getSupabaseClient(): SupabaseClient | undefined {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anonKey) return undefined
  return createClient(url, anonKey)
}

/**
 * Fetch a document from Supabase by exam/year/type.  If Supabase is not
 * configured this function returns `undefined` and callers should use
 * filesystem loaders instead.  The table name and column structure should
 * match the SQL in `supabase.sql`.
 */
export async function fetchDocFromSupabase(opts: {
  exam: string
  year: number
  type: string
}): Promise<any | undefined> {
  const client = getSupabaseClient()
  if (!client) return undefined
  const { data, error } = await client
    .from('docs')
    .select('*')
    .eq('exam', opts.exam)
    .eq('year', opts.year)
    .eq('type', opts.type)
    .limit(1)
    .maybeSingle()
  if (error) throw error
  return data || undefined
}