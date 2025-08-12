import { searchMIQs } from './content'
import type { ExamCode, EXAMS } from './exams'

/**
 * Public search API used by pages.  Delegates to the in‑memory
 * implementation in `lib/content.ts`.
 */
export async function searchQuestions(opts: {
  exam: ExamCode
  year: number
  query?: string
  tags?: string[]
  difficulty?: 'easy' | 'medium' | 'hard'
  topic?: string
}) {
  return searchMIQs(opts)
}