import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  color?: 'primary' | 'secondary' | 'neutral'
}

export default function Badge({ children, color = 'neutral' }: Props) {
  const classMap: Record<typeof color, string> = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    neutral: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100',
  }
  return <span className={`px-2 py-0.5 rounded-full text-xs ${classMap[color]}`}>{children}</span>
}