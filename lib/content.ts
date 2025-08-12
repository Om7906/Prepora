import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import yaml from 'js-yaml'
import { EXAMS, ExamCode } from './exams'
import type {
  Doc,
  MIQDoc,
  MIQDocFrontmatter,
  MIQItem,
  ResourcesMapDoc,
  ResourcesMapDocFrontmatter,
  MotivationDoc,
  MotivationDocFrontmatter,
  SyllabusPatternDoc,
  SyllabusPatternDocFrontmatter,
  TopperStoriesDoc,
  TopperStoriesDocFrontmatter,
  TopperStrategiesDoc,
  TopperStrategiesDocFrontmatter,
  StudyPlansDoc,
  StudyPlansDocFrontmatter,
} from './types'

/**
 * Normalise pillar names to file names.  The route segments use
 * human‑friendly names (e.g. `miqs`) so this mapping keeps the loader
 * consistent.
 */
const PILLAR_TO_FILENAME: Record<string, string> = {
  miqs: 'miqs.md',
  resources: 'resources.md',
  motivation: 'motivation.md',
  syllabus: 'syllabus.md',
  toppers: 'toppers.md',
  strategies: 'strategies.md',
  'study-plans': 'study-plans.md',
}

/**
 * Return the absolute path to a document file for an exam/year/pillar.
 */
function getDocPath(exam: ExamCode, year: number, pillar: keyof typeof PILLAR_TO_FILENAME): string {
  return path.join(process.cwd(), 'content', 'exams', exam, String(year), PILLAR_TO_FILENAME[pillar])
}

/**
 * Load a markdown document from disk and parse its YAML front‑matter.  The
 * parser uses js‑yaml under the hood to support complex structures in the
 * front‑matter.  The returned object conforms to one of the document
 * interfaces defined in `lib/types.ts`.
 */
export async function getDoc(
  exam: ExamCode,
  year: number,
  pillar: keyof typeof PILLAR_TO_FILENAME,
): Promise<Doc> {
  const filePath = getDocPath(exam, year, pillar)
  const file = await fs.readFile(filePath, 'utf8')
  const { data, content } = matter(file, {
    // use js-yaml instead of the built‑in parser
    engines: {
      yaml: (s: string) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as any,
    },
  })
  const frontmatter = data as any
  switch (frontmatter.type) {
    case 'miqs': {
      const fm = frontmatter as MIQDocFrontmatter & { items: MIQItem[] }
      const items = Array.isArray(fm.items) ? fm.items : []
      return { frontmatter: fm, items, body: content } as MIQDoc
    }
    case 'resources_map': {
      const fm = frontmatter as ResourcesMapDocFrontmatter & {
        books?: any[]
        videos?: any[]
        websites?: any[]
        practice_sets?: any[]
      }
      return {
        frontmatter: fm,
        books: fm.books ?? [],
        videos: fm.videos ?? [],
        websites: fm.websites ?? [],
        practice_sets: fm.practice_sets ?? [],
        body: content,
      } as ResourcesMapDoc
    }
    case 'motivation': {
      const fm = frontmatter as MotivationDocFrontmatter & { playbook: any }
      return { frontmatter: fm, playbook: fm.playbook ?? { daily: [], weekly: [], relapse_signs: [], fixes: [] }, body: content } as MotivationDoc
    }
    case 'syllabus_pattern': {
      const fm = frontmatter as SyllabusPatternDocFrontmatter & { pattern: any; syllabus: any }
      return { frontmatter: fm, pattern: fm.pattern ?? { sections: [], duration_minutes: 0, marking_scheme: '' }, syllabus: fm.syllabus ?? { topics: [] }, body: content } as SyllabusPatternDoc
    }
    case 'topper_stories': {
      const fm = frontmatter as TopperStoriesDocFrontmatter & { stories: any[] }
      return { frontmatter: fm, stories: fm.stories ?? [], body: content } as TopperStoriesDoc
    }
    case 'topper_strategies': {
      const fm = frontmatter as TopperStrategiesDocFrontmatter & { strategies: any[] }
      return { frontmatter: fm, strategies: fm.strategies ?? [], body: content } as TopperStrategiesDoc
    }
    case 'study_plans': {
      const fm = frontmatter as StudyPlansDocFrontmatter & {
        meta: any
        tracks: any[]
        milestones: any[]
        revision_cycles: any[]
        resources_links: any[]
      }
      return {
        frontmatter: fm,
        meta: fm.meta ?? { duration_weeks: 0, intensity: 'standard', target_sections: [], mocks_per_week: 0, revision_ratio: '0:0', notes: '' },
        tracks: fm.tracks ?? [],
        milestones: fm.milestones ?? [],
        revision_cycles: fm.revision_cycles ?? [],
        resources_links: fm.resources_links ?? [],
        body: content,
      } as StudyPlansDoc
    }
    default:
      throw new Error(`Unrecognised document type: ${frontmatter.type}`)
  }
}

/**
 * List all years available for a given exam by reading the filesystem.  The
 * validator uses this to ensure required files exist.  If no directory is
 * found the function returns an empty array.
 */
export async function getExamYears(exam: ExamCode): Promise<number[]> {
  const examDir = path.join(process.cwd(), 'content', 'exams', exam)
  try {
    const entries = await fs.readdir(examDir, { withFileTypes: true })
    return entries
      .filter((dirent) => dirent.isDirectory() && /^\d+$/.test(dirent.name))
      .map((dirent) => parseInt(dirent.name, 10))
      .sort()
  } catch {
    return []
  }
}

/**
 * Search through MIQs for a given exam/year.  The `query` string is matched
 * case‑insensitively against the question, explanation and source fields.  The
 * optional `filters` object can specify `tags`, `difficulty` and `topic` to
 * further narrow the results.  An empty query returns all items.
 */
export async function searchMIQs(options: {
  exam: ExamCode
  year: number
  query?: string
  tags?: string[]
  difficulty?: 'easy' | 'medium' | 'hard'
  topic?: string
}): Promise<MIQItem[]> {
  const { exam, year, query = '', tags = [], difficulty, topic } = options
  const doc = (await getDoc(exam, year, 'miqs')) as MIQDoc
  return doc.items.filter((item) => {
    const q = query.trim().toLowerCase()
    const matchesQuery = q
      ? item.question.toLowerCase().includes(q) ||
        item.explanation.toLowerCase().includes(q) ||
        item.source.toLowerCase().includes(q)
      : true
    const matchesTags = tags.length > 0 ? (item.tags || []).some((t) => tags.includes(t)) : true
    const matchesDifficulty = difficulty ? item.difficulty === difficulty : true
    const matchesTopic = topic ? item.topic === topic : true
    return matchesQuery && matchesTags && matchesDifficulty && matchesTopic
  })
}