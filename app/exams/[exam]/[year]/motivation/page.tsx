'use client'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { EXAMS, ExamCode } from '@/lib/exams'
import PillarNav from '@/components/PillarNav'
import type { MotivationDoc } from '@/lib/types'

interface Props {
  params: { exam: ExamCode; year: string }
}

export default function MotivationPage({ params }: Props) {
  const { exam, year } = params
  const meta = EXAMS[exam]
  const yearNum = parseInt(year, 10)
  if (!meta || isNaN(yearNum)) return notFound()
  const [doc, setDoc] = useState<MotivationDoc | null>(null)
  useEffect(() => {
    import('@/lib/content').then(async (mod) => {
      const d: MotivationDoc = await mod.getDoc(exam, yearNum, 'motivation' as any)
      setDoc(d)
    })
  }, [exam, yearNum])
  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{meta.title} {yearNum} &ndash; Motivation &amp; Burnout</h1>
      <PillarNav exam={exam} year={yearNum} />
      {!doc && <p>Loading motivation playbook...</p>}
      {doc && (
        <div className="mt-4 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Daily Habits</h2>
            {doc.playbook.daily.length === 0 ? <p>None listed.</p> : <ul className="list-disc list-inside space-y-1">{doc.playbook.daily.map((d, i) => <li key={i}>{d}</li>)}</ul>}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Weekly Check‑ins</h2>
            {doc.playbook.weekly.length === 0 ? <p>None listed.</p> : <ul className="list-disc list-inside space-y-1">{doc.playbook.weekly.map((d, i) => <li key={i}>{d}</li>)}</ul>}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Relapse Signs</h2>
            {doc.playbook.relapse_signs.length === 0 ? <p>None listed.</p> : <ul className="list-disc list-inside space-y-1">{doc.playbook.relapse_signs.map((d, i) => <li key={i}>{d}</li>)}</ul>}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Fixes</h2>
            {doc.playbook.fixes.length === 0 ? <p>None listed.</p> : <ul className="list-disc list-inside space-y-1">{doc.playbook.fixes.map((d, i) => <li key={i}>{d}</li>)}</ul>}
          </section>
        </div>
      )}
    </main>
  )
}