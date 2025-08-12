'use client'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { EXAMS, ExamCode } from '@/lib/exams'
import PillarNav from '@/components/PillarNav'
import type { SyllabusPatternDoc } from '@/lib/types'

interface Props {
  params: { exam: ExamCode; year: string }
}

export default function SyllabusPage({ params }: Props) {
  const { exam, year } = params
  const meta = EXAMS[exam]
  const yearNum = parseInt(year, 10)
  if (!meta || isNaN(yearNum)) return notFound()
  const [doc, setDoc] = useState<SyllabusPatternDoc | null>(null)
  useEffect(() => {
    import('@/lib/content').then(async (mod) => {
      const d: SyllabusPatternDoc = await mod.getDoc(exam, yearNum, 'syllabus' as any)
      setDoc(d)
    })
  }, [exam, yearNum])
  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{meta.title} {yearNum} &ndash; Syllabus &amp; Pattern</h1>
      <PillarNav exam={exam} year={yearNum} />
      {!doc && <p>Loading syllabus...</p>}
      {doc && (
        <div className="mt-4 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Pattern</h2>
            <table className="min-w-full border text-sm">
              <tbody>
                <tr className="border-b">
                  <th className="p-2 text-left">Sections</th>
                  <td className="p-2">{doc.pattern.sections.join(', ')}</td>
                </tr>
                <tr className="border-b">
                  <th className="p-2 text-left">Duration (minutes)</th>
                  <td className="p-2">{doc.pattern.duration_minutes}</td>
                </tr>
                <tr>
                  <th className="p-2 text-left">Marking Scheme</th>
                  <td className="p-2">{doc.pattern.marking_scheme}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Syllabus Topics</h2>
            {doc.syllabus.topics.length === 0 ? <p>No topics listed.</p> : <ul className="list-disc list-inside space-y-1">{doc.syllabus.topics.map((t, i) => <li key={i}>{t}</li>)}</ul>}
          </section>
        </div>
      )}
    </main>
  )
}