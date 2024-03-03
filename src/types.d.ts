export interface ProjectPreview {
  title: string
  path: string
  logo: string
  preview: string
  isReady: boolean
}

export interface ProjectData {
  title: string
  path: string
  website: string | null
  repository: string
  skills: Skill[]
  description: string
  images: string[] | null
  isReady: boolean
  githubId: number
}

export interface Skill {
  lang: string,
  color: string
}