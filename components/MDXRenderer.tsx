interface Props {
  body: string
}

/**
 * Simple renderer for Markdown bodies.  This implementation does not
 * evaluate MDX; instead it preserves whitespace and basic paragraph
 * structure.  For a richer experience consider integrating a Markdown
 * renderer such as `react-markdown`.
 */
export default function MDXRenderer({ body }: Props) {
  return <div className="prose dark:prose-invert whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: body }} />
}