export interface VideoItem {
  id: string
  title: string
  category: 'AI Video' | 'Visual Storytelling' | 'Creative Direction' | 'Short-form'
  year: string
  role: string
  summary: string
  intention: string
  direction: string
  aiTools: string[]
  process: string
  videoUrl?: string
  isPublic: boolean
  accentColorPattern?: number // 1, 2, 3 for geometric visual pattern
}

export interface CreativeProject {
  id: string
  title: string
  category: string
  description: string
  intention: string
  process: string
  outcome: string
  tools: string[]
}

export interface CreativeNote {
  id: string
  title: string
  category: string
  date: string
  summary: string
  content: string
}
