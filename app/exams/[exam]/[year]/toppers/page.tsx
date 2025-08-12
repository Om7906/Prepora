'use client'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { EXAMS, ExamCode } from '@/lib/exams'
import PillarNav from '@/components/PillarNav'
import Card from '@/components/Card'
import type { TopperStoriesDoc } from '@/lib/types'

interface Props {
  params: { exam: ExamCode; year: string }
}

export default function ToppersPage({ params }: Props) {
  const { exam, year } = params
  const meta = EXAMS[exam]
  const yearNum = parseInt(year, 10)
  if (!meta || isNaN(yearNum)) return notFound()
  const [doc, setDoc] = useState<TopperStoriesDoc | null>(null)
  useEffect(() => {
    import('@/lib/content').then(async (mod) => {
      const d: TopperStoriesDoc = await mod.getDoc(exam, yearNum, 'toppers' as any)
      setDoc(d)
    })
  }, [exam, yearNum])
  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{meta.title} {yearNum} &ndash; Topper Stories</h1>
      <PillarNav exam={exam} year={yearNum} />
      {!doc && <p>Loading topper stories...</p>}
      {doc && (
        <div className="mt-4 space-y-4">
          {doc.stories.map((story, idx) => (
            <Card key={idx} className="space-y-2">
              <h2 className="text-xl font-semibold">{story.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{story.background}</p>
              <p className="font-medium">Score: {story.score}</p>
              <h3 className="font-semibold">Key Habits</h3>
              <ul className="list-disc list-inside space-y-1">
                {story.key_habits.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </Card>
          ))}
          {doc.stories.length === 0 && <p>No stories available.</p>}
        </div>
      )}
    </main>
  )
}