<script>
  export let token;
  import ProjectCard from "./ProjectCard.svelte";
  import ProjectSkeleton from "./ProjectSkeleton.svelte";
  import { getProjects } from "../../api/getProjects";

  // Get repositories in the store (save in cache)
  // If not repositories => getProjects()
  // Else view repositiories in the store
</script>

<ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
  {#await getProjects(token)}
    {#each [1,2,3,4,5,6] as i }
      <li class="flex justify-center">
        <ProjectSkeleton />
      </li>
    {/each}
  {:then repos}
    {#each repos as repo}
      <li class="flex justify-center">
        <ProjectCard id={repo.id} path={repo.path} title={repo.title} preview={repo.preview} isReady={repo.isReady} />
      </li>
    {/each}
  {/await}
</ul>
