/**
 * Central registry of all supported exams.  Each exam code maps to a
 * human‑friendly title, the list of sections that constitute the exam, and
 * the default year.  This registry drives route generation, content
 * validation and seeding.
 */
export type ExamCode =
  | 'CAT'
  | 'GATE-CE'
  | 'GATE-ME'
  | 'GATE-EE'
  | 'GATE-ECE'
  | 'GATE-CSE'
  | 'JEE-MAIN'
  | 'JEE-ADVANCED'
  | 'UPSC-CSE'
  | 'SSC-JE-CE'
  | 'SSC-JE-ME'
  | 'SSC-JE-EE'
  | 'SSC-CGL'
  | 'NEET'

export interface ExamMeta {
  /** User‑facing title */
  title: string
  /** List of sections that make up the exam; used to validate front‑matter */
  sections: string[]
  /** Default year to redirect to when none is provided */
  yearDefault: number
}

export const EXAMS: Record<ExamCode, ExamMeta> = {
  CAT:        { title: 'CAT',         sections: ['QA', 'VARC', 'LRDI'], yearDefault: 2025 },
  'GATE-CE':  { title: 'GATE CE',     sections: ['CE'], yearDefault: 2025 },
  'GATE-ME':  { title: 'GATE ME',     sections: ['ME'], yearDefault: 2025 },
  'GATE-EE':  { title: 'GATE EE',     sections: ['EE'], yearDefault: 2025 },
  'GATE-ECE': { title: 'GATE ECE',    sections: ['ECE'], yearDefault: 2025 },
  'GATE-CSE': { title: 'GATE CSE',    sections: ['CSE'], yearDefault: 2025 },
  'JEE-MAIN': { title: 'JEE Main',    sections: ['Physics', 'Chemistry', 'Mathematics'], yearDefault: 2025 },
  'JEE-ADVANCED': { title: 'JEE Advanced', sections: ['Physics','Chemistry','Mathematics'], yearDefault: 2025 },
  'UPSC-CSE': { title: 'UPSC CSE',    sections: ['Prelims-GS','Prelims-CSAT','Mains-GS1','Mains-GS2','Mains-GS3','Mains-GS4','Essay','Optional'], yearDefault: 2025 },
  'SSC-JE-CE': { title: 'SSC JE CE', sections: ['CE'], yearDefault: 2025 },
  'SSC-JE-ME': { title: 'SSC JE ME', sections: ['ME'], yearDefault: 2025 },
  'SSC-JE-EE': { title: 'SSC JE EE', sections: ['EE'], yearDefault: 2025 },
  'SSC-CGL': { title: 'SSC CGL',     sections: ['Quant','Reasoning','English','General Awareness'], yearDefault: 2025 },
  NEET: { title: 'NEET',            sections: ['Physics','Chemistry','Biology'], yearDefault: 2025 }
}

/**
 * Return a sorted list of exam codes.  This can be used to render the
 * landing page or to iterate over all exams when validating content.
 */
export function getExamCodes(): ExamCode[] {
  return Object.keys(EXAMS) as ExamCode[]
}

/**
 * Get the default year for an exam.
 */
export function getDefaultYear(exam: ExamCode): number {
  return EXAMS[exam].yearDefault
}