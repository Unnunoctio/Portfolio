<script>
  export let apiUrl;
  import ProjectSkeleton from "./ProjectSkeleton.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import { getProjects } from "../../api/getProjects";
</script>

<ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
  {#await getProjects(apiUrl)}
    {#each [1,2,3,4,5,6] as i }
      <li class="flex justify-center">
        <ProjectSkeleton />
      </li>
    {/each}
  {:then projects}
    {#each projects as project}
      <li class="flex justify-center">
        <ProjectCard path={project.path} title={project.title} logo={`${apiUrl}${project.logo}`} preview={`${apiUrl}${project.preview}`} isReady={project.isReady} />
      </li>
    {/each}
  {/await}
</ul>
