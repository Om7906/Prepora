#!/usr/bin/env ts-node
import { validateContent } from '../lib/validateContent'

async function main() {
  const year = 2025
  const errors = await validateContent(year)
  if (errors.length > 0) {
    console.error('Content validation failed:')
    for (const err of errors) console.error('  -', err)
    process.exit(1)
  }
  console.log('Content validation passed for year', year)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})