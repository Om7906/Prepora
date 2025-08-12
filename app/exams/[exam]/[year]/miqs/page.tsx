'use client'
import { useState } from 'react'
import { notFound } from 'next/navigation'
import { EXAMS, ExamCode } from '@/lib/exams'
import { getDoc } from '@/lib/content'
import type { MIQDoc, MIQItem } from '@/lib/types'
import PillarNav from '@/components/PillarNav'
import SearchInput from '@/components/SearchInput'
import TagFilter from '@/components/TagFilter'
import Card from '@/components/Card'
import Expandable from '@/components/Expandable'
import Badge from '@/components/Badge'

interface Props {
  params: { exam: ExamCode; year: string }
}

export default function MIQsPage({ params }: Props) {
  const { exam, year } = params
  const meta = EXAMS[exam]
  const yearNum = parseInt(year, 10)
  if (!meta || isNaN(yearNum)) return notFound()
  // Load MIQ doc synchronously (server side) - note: this call is synchronous here for demonstration; in a real app you would fetch data in a server component.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [query, setQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  // @ts-ignore: dynamic import of doc is done at runtime
  // In a real implementation this would be loaded on the server and passed as props.
  const [items, setItems] = useState<MIQItem[]>([])

  // Placeholder effect to load items when component mounts
  // This uses a dynamic import of the doc to avoid bundling Node APIs in the client
  // In a real application you should fetch via an API route or directly in a server component.
  import(/* webpackIgnore: true */ '@/lib/content').then(async (mod) => {
    const doc: MIQDoc = await mod.getDoc(exam, yearNum, 'miqs' as any)
    setItems(doc.items)
  })

  const availableTags = Array.from(new Set(items.flatMap((item) => item.tags ?? [])))

  const filtered = items.filter((item) => {
    const q = query.trim().toLowerCase()
    const matchesQuery = q
      ? item.question.toLowerCase().includes(q) || item.explanation.toLowerCase().includes(q)
      : true
    const matchesTags = selectedTags.length > 0 ? (item.tags ?? []).some((t) => selectedTags.includes(t)) : true
    return matchesQuery && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">{meta.title} {yearNum} &ndash; MIQs</h1>
      <PillarNav exam={exam} year={yearNum} />
      <div className="my-4 space-y-4">
        <SearchInput value={query} onChange={setQuery} placeholder="Search questions..." />
        {availableTags.length > 0 && (
          <TagFilter tags={availableTags} selected={selectedTags} onToggle={toggleTag} />
        )}
      </div>
      <div className="space-y-4 mt-4">
        {filtered.map((item) => (
          <Card key={item.id}>
            <div className="flex items-start gap-2">
              <Badge color="primary">{item.topic}</Badge>
              <Badge color="secondary">{item.difficulty ?? 'medium'}</Badge>
            </div>
            <p className="font-medium mt-2">{item.question}</p>
            {item.options && item.options.length > 0 && (
              <ul className="list-disc list-inside my-1">
                {item.options.map((opt, idx) => (
                  <li key={idx}>{opt}</li>
                ))}
              </ul>
            )}
            <Expandable summary={<span>Show Explanation</span>}>
              <p><strong>Answer:</strong> {item.answer}</p>
              <p className="mt-1">{item.explanation}</p>
              <p className="mt-1 text-sm text-gray-500">Source: {item.source}</p>
            </Expandable>
          </Card>
        ))}
        {filtered.length === 0 && <p>No questions found.</p>}
      </div>
    </main>
  )
}