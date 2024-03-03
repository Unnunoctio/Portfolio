import type { Skill } from "../types";

export const getSkills = async (apiUrl: string): Promise<Skill[] | null> => {
  const res = await fetch(`${apiUrl}/api/skills`)
  if (!res.ok) return null

  const { data } = await res.json()

  return data
    .sort((a: any, b: any) => a.attributes.order - b.attributes.order)
    .map(({ attributes }: any) => {
      return {
        lang: attributes.lang,
        color: attributes.color
      }
    })
}