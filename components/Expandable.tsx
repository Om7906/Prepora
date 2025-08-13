"use client";

import { ReactNode, useState } from 'react'

interface Props {
  summary: ReactNode
  children: ReactNode
}

export default function Expandable({ summary, children }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div className="my-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-primary font-medium"
      >
        {open ? 'Hide' : 'Show'}
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  )
}
