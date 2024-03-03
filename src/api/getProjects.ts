import type { ProjectPreview } from "../types";

export const getProjects = async (apiUrl: string): Promise<ProjectPreview[]> => {
  const res = await fetch(`${apiUrl}/api/projects?fields[0]=order&fields[1]=title&fields[2]=path&fields[3]=isReady&&populate[logo][fields][0]=url&populate[preview][fields][0]=url`)
  if (!res.ok) return []

  const { data } = await res.json()

  return data
    .sort((a: any, b: any) => a.attributes.order - b.attributes.order)
    .map(({ attributes }: any) => {
      return {
        title: attributes.title,
        path: attributes.path,
        logo: attributes.logo.data.attributes.url,
        preview: attributes.preview.data.attributes.url,
        isReady: attributes.isReady,
      }
    })
}