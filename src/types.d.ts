interface Project {
  id: number
  order: number
  path: string
  title: string
  website: string | null
  repository: string
  skills: string[]
  description: string
  license: string
  stars: number
  forks: number
  watchers: number
  preview: string
  images: string[]
  isReady: boolean
}
