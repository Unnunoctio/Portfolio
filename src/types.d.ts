export interface About {
  about_id: number
  title: string
  sub_title: string
  biography: string
  avatar: string
}

export interface Contact {
  contact_id: number
  web_contact: string
  link: string
  styled_link: string
}

export interface Project {
  project_id: number
  order: number
  title: string
  path: string
  icon: string | null
  logo: string | null
  preview: string | null
  website: string | null
  repository: string
  github_id: number
  description: string | null
  is_ready: boolean
}

export interface GithubData {
  license: string
  stargazers: number
  forks: number
  watchers: number
}

export interface ProjectComplete extends Project {
  skills: Skill[],
  github: GithubData | null
}

export interface Resume {
  resume_id: number
  code: string
  start_date: Date
  end_date: Date | null
  title: string
  company: string
  description: string | null
}

export interface Skill {
  skill_id: number
  order: number
  lang: string
  color: string
}