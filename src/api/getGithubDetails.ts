import type { GithubDetails } from "../types";

export const getGithubDetails = async (githubId: number, githubToken: string): Promise<GithubDetails | null> => {
  const res = await fetch('https://api.github.com/users/unnunoctio/repos', {
    headers: { Authorization: `Bearer ${githubToken}` },
    cache: 'no-cache',
  })
  if (!res.ok) return null

  const repositories = await res.json()

  const repo = repositories?.find((repo: any) => repo.id === githubId)
  if (repo === undefined) return null

  return {
    license: repo.license?.name,
    stars: repo.stargazers_count,
    forks: repo.forks,
    watchers: repo.watchers
  }
}