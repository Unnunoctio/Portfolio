import type { ProjectData } from "../types";

export const getProject = async (apiUrl: string, path:string): Promise<ProjectData | null> => {
  const res = await fetch(`${apiUrl}/api/projects?fields[0]=title&fields[1]=path&fields[2]=website&fields[3]=repository&fields[4]=description&fields[5]=isReady&fields[6]=githubId&populate[skills][fields][0]=order&populate[skills][fields][1]=lang&populate[skills][fields][2]=color&populate[images]=*`)
  if (!res.ok) return null

  const { data } = await res.json()
  
  const project = data.find((project: any) => project.attributes.path === path)
  if (project === undefined) return null

  return {
    title: project.attributes.title,
    path: project.attributes.path,
    website: project.attributes.website,
    repository: project.attributes.repository,
    skills: project.attributes.skills.data
      .sort((a: any, b: any) => a.attributes.order - b.attributes.order)
      .map(({ attributes }: any) => {
        return {
          lang: attributes.lang,
          color: attributes.color
        }
      }),
    description: project.attributes.description,
    images: project.attributes.images.data,
    isReady: project.attributes.isReady,
    githubId: Number(project.attributes.githubId)
  }
}