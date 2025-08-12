import path from 'path'
import fs from 'fs/promises'
import { EXAMS, ExamCode } from './exams'
import { getDoc } from './content'

const REQUIRED_FILES = [
  'miqs.md',
  'resources.md',
  'motivation.md',
  'syllabus.md',
  'toppers.md',
  'strategies.md',
  'study-plans.md',
]

/**
 * Validate that for each exam in the registry and each required year
 * there exists a directory with all seven pillar files.  Also verify that
 * the front‑matter inside each file declares the correct `type` and that
 * `section` values belong to the exam's sections.  Returns an array of
 * human‑readable error messages.  An empty array means the content is
 * consistent.
 */
export async function validateContent(year: number): Promise<string[]> {
  const errors: string[] = []
  for (const exam of Object.keys(EXAMS) as ExamCode[]) {
    const examDir = path.join(process.cwd(), 'content', 'exams', exam, String(year))
    try {
      const files = await fs.readdir(examDir)
      for (const required of REQUIRED_FILES) {
        if (!files.includes(required)) {
          errors.push(`${exam}/${year} missing file ${required}`)
        }
      }
      // Validate each file
      for (const file of files) {
        if (!REQUIRED_FILES.includes(file)) continue
        const pillar = file.replace(/\.md$/, '') as keyof typeof REQUIRED_FILES
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: exam codes align with type
          const doc = await getDoc(exam, year, pillar as any)
          // Check type matches file name
          const expectedTypeMap: Record<string, string> = {
            miqs: 'miqs',
            resources: 'resources_map',
            motivation: 'motivation',
            syllabus: 'syllabus_pattern',
            toppers: 'topper_stories',
            strategies: 'topper_strategies',
            'study-plans': 'study_plans',
          }
          const expectedType = expectedTypeMap[pillar]
          if (doc.frontmatter.type !== expectedType) {
            errors.push(`${exam}/${year}/${file} has type ${doc.frontmatter.type}, expected ${expectedType}`)
          }
          // Check section belongs to registry
          const validSections = EXAMS[exam].sections
          if (!validSections.includes(doc.frontmatter.section)) {
            errors.push(`${exam}/${year}/${file} has invalid section ${doc.frontmatter.section}`)
          }
        } catch (e: any) {
          errors.push(`${exam}/${year}/${file} failed to parse: ${e.message}`)
        }
      }
    } catch {
      errors.push(`${exam}/${year} directory missing or unreadable`)
    }
  }
  return errors
}