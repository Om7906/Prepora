import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  exam: string
  year: number
}

const pillars: { slug: string; label: string }[] = [
  { slug: 'miqs', label: 'MIQs' },
  { slug: 'resources', label: 'Resources' },
  { slug: 'motivation', label: 'Motivation' },
  { slug: 'syllabus', label: 'Syllabus' },
  { slug: 'toppers', label: 'Toppers' },
  { slug: 'strategies', label: 'Strategies' },
  { slug: 'study-plans', label: 'Study Plans' },
]

export default function PillarNav({ exam, year }: Props) {
  const pathname = usePathname()
  return (
    <nav className="flex gap-2 overflow-x-auto py-2 px-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      {pillars.map(({ slug, label }) => {
        const href = `/exams/${exam}/${year}/${slug}`
        const active = pathname === href
        return (
          <Link
            key={slug}
            href={href}
            className={
              'px-3 py-1 rounded-md text-sm whitespace-nowrap' +
              (active
                ? ' bg-primary text-white'
                : ' bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700')
            }
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}