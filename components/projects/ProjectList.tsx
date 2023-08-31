import extraData from '@/public/projectsExtraData.json'
import { ProjectCard } from './ProjectCard'

interface IGithub {
  url: string
  stars: number
  forks: number
  watchers: number
}

interface IProject {
  order: number
  id: number
  title: string
  website: string
  github: IGithub
  skillsCode: string[]
  description: string
  image: string
}

const fetchProjects = async (): Promise<IProject[]> => {
  const response = await fetch(process.env.PUBLIC_GITHUB_REQUEST as string, { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN as string}` } })
  const data = await response.json()

  const projects: IProject[] = data.map((githubItem: any) => {
    const { html_url: htmlUrl, homepage, id, stargazers_count: stars, forks, watchers } = githubItem
    const projectExtra = extraData.find((edata) => edata.idGithub === id)

    return {
      order: projectExtra?.order,
      id,
      title: projectExtra?.title,
      website: homepage,
      github: {
        url: htmlUrl,
        stars,
        forks,
        watchers
      },
      skillsCode: projectExtra?.skillsCode,
      description: '',
      image: projectExtra?.image
    }
  })

  return projects.filter((project) => project.order !== undefined).sort((a: IProject, b: IProject) => a.order - b.order)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const ProjectList = async () => {
  const projects = await fetchProjects()

  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16'>
      {projects.map((project) => (
        <li key={project.id} className='flex justify-center'>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  )
}
