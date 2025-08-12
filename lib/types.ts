/**
 * Common fields included in every document's front‑matter.  The `exam` and
 * `exam_year` fields link a document to its exam and year.  `section`
 * identifies the part of the exam the document relates to and must exist
 * within the list defined in the exam registry.  `tags` classify the
 * document; `updated` reflects the last edit date; `difficulty` may be
 * omitted for non‑question documents; `type` must match one of the pillar
 * values.
 */
export interface SharedFrontmatter {
  title: string
  exam: string
  exam_year: number
  section: string
  tags: string[]
  updated: string
  difficulty?: 'easy' | 'medium' | 'hard'
  type: DocType
}

export type DocType =
  | 'miqs'
  | 'resources_map'
  | 'motivation'
  | 'syllabus_pattern'
  | 'topper_stories'
  | 'topper_strategies'
  | 'study_plans'

// ----------------------- MIQs -----------------------

export interface MIQItem {
  id: string
  question: string
  options?: string[]
  answer: string
  explanation: string
  source: string
  topic: string
  subtopic: string
  tags?: string[]
  difficulty?: 'easy' | 'medium' | 'hard'
}

export interface MIQDocFrontmatter extends SharedFrontmatter {
  type: 'miqs'
}

export interface MIQDoc {
  frontmatter: MIQDocFrontmatter
  items: MIQItem[]
  body: string
}

// -------------------- Resources ----------------------

export interface ResourceItem {
  title: string
  author?: string
  edition?: string
  channel?: string
  url?: string
  why: string
}

export interface ResourcesMapDocFrontmatter extends SharedFrontmatter {
  type: 'resources_map'
}

export interface ResourcesMapDoc {
  frontmatter: ResourcesMapDocFrontmatter
  books: ResourceItem[]
  videos: ResourceItem[]
  websites: ResourceItem[]
  practice_sets: ResourceItem[]
  body: string
}

// -------------------- Motivation ---------------------

export interface MotivationPlaybook {
  daily: string[]
  weekly: string[]
  relapse_signs: string[]
  fixes: string[]
}

export interface MotivationDocFrontmatter extends SharedFrontmatter {
  type: 'motivation'
}

export interface MotivationDoc {
  frontmatter: MotivationDocFrontmatter
  playbook: MotivationPlaybook
  body: string
}

// ------------------- Syllabus/Pattern ---------------

export interface PatternInfo {
  sections: string[]
  duration_minutes: number
  marking_scheme: string
}

export interface SyllabusPatternDocFrontmatter extends SharedFrontmatter {
  type: 'syllabus_pattern'
}

export interface SyllabusPatternDoc {
  frontmatter: SyllabusPatternDocFrontmatter
  pattern: PatternInfo
  syllabus: {
    topics: string[]
  }
  body: string
}

// ------------------- Topper Stories -----------------

export interface TopperStory {
  name: string
  background: string
  score: string
  key_habits: string[]
}

export interface TopperStoriesDocFrontmatter extends SharedFrontmatter {
  type: 'topper_stories'
}

export interface TopperStoriesDoc {
  frontmatter: TopperStoriesDocFrontmatter
  stories: TopperStory[]
  body: string
}

// ------------------- Topper Strategies --------------

export interface TopperStrategy {
  section: string
  plan: string[]
  pitfalls: string[]
  timing_rules: string[]
}

export interface TopperStrategiesDocFrontmatter extends SharedFrontmatter {
  type: 'topper_strategies'
}

export interface TopperStrategiesDoc {
  frontmatter: TopperStrategiesDocFrontmatter
  strategies: TopperStrategy[]
  body: string
}

// ------------------- Study Plans --------------------

export interface StudyPlanMeta {
  duration_weeks: number
  intensity: 'light' | 'standard' | 'aggressive'
  target_sections: string[]
  mocks_per_week: number
  revision_ratio: string
  notes: string
}

export interface StudyPlanBlock {
  topic: string
  duration_h: number
}

export interface StudyPlanDay {
  day: string
  blocks: StudyPlanBlock[]
}

export interface StudyPlanWeek {
  week: number
  focus: string[]
  daily: StudyPlanDay[]
  checklist: string[]
  mock: {
    type: 'sectional' | 'full'
    count: number
    review_rules: string[]
  }
}

export interface StudyPlanTrack {
  name: string
  weeks: StudyPlanWeek[]
}

export interface Milestone {
  week: number
  goals: string[]
}

export interface RevisionCycle {
  name: string
  schedule: string[]
}

export interface ResourceLink {
  tag: string
  pointers: string[]
}

export interface StudyPlansDocFrontmatter extends SharedFrontmatter {
  type: 'study_plans'
}

export interface StudyPlansDoc {
  frontmatter: StudyPlansDocFrontmatter
  meta: StudyPlanMeta
  tracks: StudyPlanTrack[]
  milestones: Milestone[]
  revision_cycles: RevisionCycle[]
  resources_links: ResourceLink[]
  body: string
}

export type Doc =
  | MIQDoc
  | ResourcesMapDoc
  | MotivationDoc
  | SyllabusPatternDoc
  | TopperStoriesDoc
  | TopperStrategiesDoc
  | StudyPlansDoc

// Type guards to help discriminate between documents
export function isMIQDoc(doc: Doc): doc is MIQDoc {
  return doc.frontmatter.type === 'miqs'
}
export function isResourcesMapDoc(doc: Doc): doc is ResourcesMapDoc {
  return doc.frontmatter.type === 'resources_map'
}
export function isMotivationDoc(doc: Doc): doc is MotivationDoc {
  return doc.frontmatter.type === 'motivation'
}
export function isSyllabusPatternDoc(doc: Doc): doc is SyllabusPatternDoc {
  return doc.frontmatter.type === 'syllabus_pattern'
}
export function isTopperStoriesDoc(doc: Doc): doc is TopperStoriesDoc {
  return doc.frontmatter.type === 'topper_stories'
}
export function isTopperStrategiesDoc(doc: Doc): doc is TopperStrategiesDoc {
  return doc.frontmatter.type === 'topper_strategies'
}
export function isStudyPlansDoc(doc: Doc): doc is StudyPlansDoc {
  return doc.frontmatter.type === 'study_plans'
}