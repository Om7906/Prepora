'use client'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { EXAMS, ExamCode } from '@/lib/exams'
import PillarNav from '@/components/PillarNav'
import Card from '@/components/Card'
import type { ResourcesMapDoc } from '@/lib/types'

interface Props {
  params: { exam: ExamCode; year: string }
}

export default function ResourcesPage({ params }: Props) {
  const { exam, year } = params
  const meta = EXAMS[exam]
  const yearNum = parseInt(year, 10)
  if (!meta || isNaN(yearNum)) return notFound()
  const [doc, setDoc] = useState<ResourcesMapDoc | null>(null)
  useEffect(() => {
    import('@/lib/content').then(async (mod) => {
      const d: ResourcesMapDoc = await mod.getDoc(exam, yearNum, 'resources' as any)
      setDoc(d)
    })
  }, [exam, yearNum])
  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{meta.title} {yearNum} &ndash; Resources</h1>
      <PillarNav exam={exam} year={yearNum} />
      {!doc && <p>Loading resources...</p>}
      {doc && (
        <div className="mt-4 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Books</h2>
            {doc.books.length === 0 ? (
              <p>No books listed.</p>
            ) : (
              <ul className="list-disc list-inside space-y-1">
                {doc.books.map((b, idx) => (
                  <li key={idx}>
                    <span className="font-medium">{b.title}</span>
                    {b.author && ` by ${b.author}`}
                    {b.edition && ` (${b.edition})`} &ndash; {b.why}
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Videos</h2>
            {doc.videos.length === 0 ? (
              <p>No videos listed.</p>
            ) : (
              <ul className="list-disc list-inside space-y-1">
                {doc.videos.map((v, idx) => (
                  <li key={idx}>
                    <a href={v.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">
                      {v.title}
                    </a>
                    {v.channel && ` (${v.channel})`} &ndash; {v.why}
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Websites</h2>
            {doc.websites.length === 0 ? (
              <p>No websites listed.</p>
            ) : (
              <ul className="list-disc list-inside space-y-1">
                {doc.websites.map((w, idx) => (
                  <li key={idx}>
                    <a href={w.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">
                      {w.title}
                    </a>
                    &ndash; {w.why}
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Practice Sets</h2>
            {doc.practice_sets.length === 0 ? (
              <p>No practice sets listed.</p>
            ) : (
              <ul className="list-disc list-inside space-y-1">
                {doc.practice_sets.map((p, idx) => (
                  <li key={idx}>
                    <span className="font-medium">{p.title}</span>
                    {p.url && (
                      <>
                        {' '}
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                          [link]
                        </a>
                      </>
                    )}{' '}
                    &ndash; {p.why}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      )}
    </main>
  )
}