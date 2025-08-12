'use client'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { EXAMS, ExamCode } from '@/lib/exams'
import PillarNav from '@/components/PillarNav'
import Card from '@/components/Card'
import type { TopperStrategiesDoc, TopperStrategy } from '@/lib/types'

interface Props {
  params: { exam: ExamCode; year: string }
}

export default function StrategiesPage({ params }: Props) {
  const { exam, year } = params
  const meta = EXAMS[exam]
  const yearNum = parseInt(year, 10)
  if (!meta || isNaN(yearNum)) return notFound()
  const [doc, setDoc] = useState<TopperStrategiesDoc | null>(null)
  useEffect(() => {
    import('@/lib/content').then(async (mod) => {
      const d: TopperStrategiesDoc = await mod.getDoc(exam, yearNum, 'strategies' as any)
      setDoc(d)
    })
  }, [exam, yearNum])
  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{meta.title} {yearNum} &ndash; Topper Strategies</h1>
      <PillarNav exam={exam} year={yearNum} />
      {!doc && <p>Loading strategies...</p>}
      {doc && (
        <div className="mt-4 space-y-4">
          {doc.strategies.map((strat: TopperStrategy, idx: number) => (
            <Card key={idx} className="space-y-2">
              <h2 className="text-xl font-semibold">{strat.section}</h2>
              <h3 className="font-semibold">Plan</h3>
              <ul className="list-disc list-inside space-y-1">
                {strat.plan.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <h3 className="font-semibold">Pitfalls</h3>
              <ul className="list-disc list-inside space-y-1">
                {strat.pitfalls.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <h3 className="font-semibold">Timing Rules</h3>
              <ul className="list-disc list-inside space-y-1">
                {strat.timing_rules.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
          {doc.strategies.length === 0 && <p>No strategies available.</p>}
        </div>
      )}
    </main>
  )
}