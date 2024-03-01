import data from "../assets/projectsData.json"

export const getProject = async(token: string, path: string): Promise<Project | null> => {
  // Get Repositories for github
  const res = await fetch("https://api.github.com/users/unnunoctio/repos", {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-cache",
  });
  const repositories = await res.json();

  const repo = repositories?.find((repo: any) => repo.name.toLowerCase() === path)
  if (repo === undefined) return null

  // Formatted data
  const { id, name, html_url, description, homepage, license, topics, stargazers_count, forks, watchers } = repo
  const extra = data.find(item => item.githubId === id)

  return {
    id,
    order: extra?.order,
    path: name.toLowerCase(),
    title: description !== null ? description.split(" - ")[0] : name.replace("-", " "),
    website: homepage,
    repository: html_url,
    skills: topics,
    description: description?.split(" - ")[1],
    license: license?.name,
    stars: stargazers_count,
    forks,
    watchers,
    preview: extra?.preview,
    images: extra?.images,
    isReady: true
  } as Project
}