import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: Props) {
  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-md p-4 shadow-sm ${className}`}>
      {children}
    </div>
  )
}