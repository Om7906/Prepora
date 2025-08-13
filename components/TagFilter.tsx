"use client";

interface Props {
  tags: string[]
  selected: string[]
  onToggle: (tag: string) => void
}

export default function TagFilter({ tags, selected, onToggle }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const active = selected.includes(tag)
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggle(tag)}
            className={
              'px-2 py-1 text-sm rounded-full border' +
              (active
                ? ' bg-primary text-white border-primary'
                : ' bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700')
            }
          >
            {tag}
          </button>
        )
      })}
    </div>
  )
}
