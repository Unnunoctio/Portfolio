<script>
  export let token;
  import data from "/public/projects/data.json";

  async function fetchRepos() {
    const res = await fetch("https://api.github.com/users/unnunoctio/repos", { headers: { Authorization: `Bearer ${token}` }, cache: 'no-cache' })
    const repositories = await res.json()

    const projects = await Promise.all(repositories.map(async (repo) => {
      const { id, name, description } = repo
      const extra = data.find(item => item.githubId === id)

      const res = await fetch(`https://api.github.com/repos/unnunoctio/${name}/tags`, { headers: { Authorization: `Bearer ${token}` }, cache: 'no-cache' })
      const tags = await res.json()

      return {
        id,
        order: extra?.order,
        title: (description !== null) ? description.split(' - ')[0] : name.replace('-', ' '),
        preview: extra?.preview,
        isReady: tags.find(tag => tag.name === "1.0.0") ? true : false
      }
    }))

    const sorted = projects.sort((a, b) => {
      if (a.isReady === true && b.isReady === false) return -1
      if (a.isReady === false && b.isReady === true) return 1
      if (a.order !== undefined && b.order === undefined) return -1
      if (a.order === undefined && b.order !== undefined) return 1
      if (a.order !== undefined && b.order !== undefined) return a.order - b.order
      return a.id - b.id
    })

    return sorted
  }
</script>

{#await fetchRepos()}
  <p>loading</p>
{:then repos} 
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
    {#each repos as repo}
      <li class="flex justify-center">
        {repo.title}
      </li>
    {/each}
  </ul>
{/await}