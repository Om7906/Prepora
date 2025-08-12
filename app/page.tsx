import Link from 'next/link'
import { getExamCodes, EXAMS } from '@/lib/exams'

export default function HomePage() {
  const exams = getExamCodes()
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Prepora</h1>
      <p className="mb-4">Choose an exam to explore resources and study plans for 2025.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {exams.map((code) => {
          const meta = EXAMS[code]
          const year = meta.yearDefault
          return (
            <li key={code}>
              <Link
                href={`/exams/${code}/${year}`}
                className="block border border-gray-200 dark:border-gray-700 rounded-md p-4 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{meta.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sections: {meta.sections.join(', ')}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}