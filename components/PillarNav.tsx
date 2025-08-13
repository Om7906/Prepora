"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  exam: string;
  year: number | string;
  sections?: string[];
}

export default function PillarNav({ exam, year }: Props) {
  const pathname = usePathname();
  const base = `/exams/${exam}/${year}`;

  const items = [
    { href: `${base}`, label: "Overview" },
    { href: `${base}/miqs`, label: "MIQs" },
    { href: `${base}/resources`, label: "Resources" },
    { href: `${base}/motivation`, label: "Motivation" },
    { href: `${base}/syllabus`, label: "Syllabus" },
    { href: `${base}/toppers`, label: "Toppers" },
    { href: `${base}/strategies`, label: "Strategies" },
    { href: `${base}/study-plans`, label: "Study Plans" },
  ];

  return (
    <nav className="flex gap-2 overflow-x-auto py-2">
      {items.map((it) => {
        const active = pathname === it.href;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={`px-3 py-1 rounded-full border ${
              active ? "bg-black text-white" : "bg-white"
            }`}
          >
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}



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
