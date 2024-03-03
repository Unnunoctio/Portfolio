<script>
  export let githubId;
  export let githubToken;
  import ProjectDetail from "./ProjectDetail.svelte";
  import StarIcon from "./StarIcon.svelte";
  import WatcherIcon from "./WatcherIcon.svelte";
  import ForkIcon from "./ForkIcon.svelte";
  import { getGithubDetails } from "../../api/getGithubDetails"; 
</script>

<div class="flex gap-y-2 gap-x-6 justify-between flex-wrap sm:flex-nowrap w-full max-w-[700px]">
  {#await getGithubDetails(githubId, githubToken)}
    <ProjectDetail title="LICENCIA" body={null} style="min-w-[109px]" />
    <ProjectDetail title="STARS" body={null} />
    <ProjectDetail title="WATCHERS" body={null} />
    <ProjectDetail title="FORKS" body={null} />
  {:then details} 
    <ProjectDetail title="LICENCIA" body={details.license} style="min-w-[109px]" />
    <ProjectDetail title="STARS" body={details.stars}>
      <StarIcon style="w-6 h-6 fill-text-primary" />
    </ProjectDetail>
    <ProjectDetail title="WATCHERS" body={details.watchers}>
      <WatcherIcon style="w-6 h-6 fill-text-primary" />
    </ProjectDetail>
    <ProjectDetail title="FORKS" body={details.forks}>
      <ForkIcon style="w-6 h-6 fill-text-primary" />
    </ProjectDetail>
  {/await}
</div>