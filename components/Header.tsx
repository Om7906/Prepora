import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Prepora
        </Link>
        {/* Placeholder for future nav components (exam/year selector) */}
      </div>
    </header>
  )
}