import { notFound } from 'next/navigation'
import { EXAMS, ExamCode } from '@/lib/exams'
import PillarNav from '@/components/PillarNav'

interface Props {
  params: { exam: ExamCode; year: string }
}

export default function ExamOverviewPage({ params }: Props) {
  const { exam, year } = params
  const meta = EXAMS[exam]
  const yearNum = parseInt(year, 10)
  if (!meta || isNaN(yearNum)) return notFound()
  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">
        {meta.title} {yearNum}
      </h1>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Sections: {meta.sections.join(', ')}
      </p>
      {/* Pillar navigation */}
      <PillarNav exam={exam} year={yearNum} />
      <div className="mt-6">
        <p>Welcome to the {meta.title} {yearNum} dashboard. Use the navigation above to explore most important questions, resources, study plans and more.</p>
      </div>
    </main>
  )
}