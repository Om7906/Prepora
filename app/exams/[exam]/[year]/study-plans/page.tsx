'use client'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { EXAMS, ExamCode } from '@/lib/exams'
import PillarNav from '@/components/PillarNav'
import type { StudyPlansDoc, StudyPlanTrack, StudyPlanWeek } from '@/lib/types'

interface Props {
  params: { exam: ExamCode; year: string }
}

export default function StudyPlansPage({ params }: Props) {
  const { exam, year } = params
  const meta = EXAMS[exam]
  const yearNum = parseInt(year, 10)
  if (!meta || isNaN(yearNum)) return notFound()
  const [doc, setDoc] = useState<StudyPlansDoc | null>(null)
  const [trackIndex, setTrackIndex] = useState(0)
  useEffect(() => {
    import('@/lib/content').then(async (mod) => {
      const d: StudyPlansDoc = await mod.getDoc(exam, yearNum, 'study-plans' as any)
      setDoc(d)
    })
  }, [exam, yearNum])
  const selectTrack = (idx: number) => setTrackIndex(idx)
  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{meta.title} {yearNum} &ndash; Study Plans</h1>
      <PillarNav exam={exam} year={yearNum} />
      {!doc && <p>Loading study plans...</p>}
      {doc && (
        <div className="mt-4 space-y-6">
          {/* Meta */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Plan Meta</h2>
            <p>Duration: {doc.meta.duration_weeks} weeks</p>
            <p>Intensity: {doc.meta.intensity}</p>
            <p>Target Sections: {doc.meta.target_sections.join(', ')}</p>
            <p>Mocks per week: {doc.meta.mocks_per_week}</p>
            <p>Revision Ratio: {doc.meta.revision_ratio}</p>
            {doc.meta.notes && <p>Notes: {doc.meta.notes}</p>}
          </section>
          {/* Track selector */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Tracks</h2>
            <div className="flex flex-wrap gap-2">
              {doc.tracks.map((track: StudyPlanTrack, idx: number) => (
                <button
                  key={idx}
                  className={`px-3 py-1 rounded-md border ${idx === trackIndex ? 'bg-primary text-white border-primary' : 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700'}`}
                  onClick={() => selectTrack(idx)}
                >
                  {track.name}
                </button>
              ))}
            </div>
          </section>
          {/* Weeks */}
          {doc.tracks.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Week by Week</h2>
              {doc.tracks[trackIndex].weeks.map((week: StudyPlanWeek, idx: number) => (
                <details key={idx} className="mb-4" open={idx === 0}>
                  <summary className="cursor-pointer font-medium">Week {week.week}: {week.focus.join(', ')}</summary>
                  <div className="ml-4 mt-2 space-y-2">
                    {week.daily.map((day) => (
                      <div key={day.day} className="border-l-2 border-primary pl-2">
                        <p className="font-semibold">{day.day}</p>
                        <ul className="list-disc list-inside">
                          {day.blocks.map((block, i) => (
                            <li key={i}>{block.topic} ({block.duration_h}h)</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {week.checklist.length > 0 && (
                      <div>
                        <p className="font-semibold">Checklist</p>
                        <ul className="list-disc list-inside">
                          {week.checklist.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">Mock Test</p>
                      <p>Type: {week.mock.type}, Count: {week.mock.count}</p>
                      {week.mock.review_rules.length > 0 && (
                        <ul className="list-disc list-inside">
                          {week.mock.review_rules.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </section>
          )}
          {/* Milestones */}
          {doc.milestones.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Milestones</h2>
              <ul className="list-disc list-inside space-y-1">
                {doc.milestones.map((m, i) => (
                  <li key={i}>Week {m.week}: {m.goals.join(', ')}</li>
                ))}
              </ul>
            </section>
          )}
          {/* Revision cycles */}
          {doc.revision_cycles.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Revision Cycles</h2>
              <ul className="list-disc list-inside space-y-1">
                {doc.revision_cycles.map((rc, i) => (
                  <li key={i}>{rc.name}: {rc.schedule.join(', ')}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </main>
  )
}