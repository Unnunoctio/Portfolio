<script>
  import PreviewLogo from "./PreviewLogo.svelte";
  
  export let id;
  export let title;
  export let preview;
  export let isReady;
</script>

<a href={`/${id}`} data-astro-prefetch class="card group relative w-full max-w-[400px] cursor-pointer">
  <div class="absolute inset-0 w-full h-[270px] rounded-full transition-all duration-300 group-hover:shadow-card group-hover:animate-card-pulse group-hover:animate-card-shadow-pulse" />
  <div class="relative overflow-hidden w-full h-[270px] bg-bg-secondary rounded-lg outline outline-offset-4 outline-4 outline-transparent transition-all duration-300 group-hover:animate-card-pulse group-hover:outline-hover-outline">
    {#if preview} <img src={preview} alt={title} width={450} height={280} class={`object-cover w-full h-full ${isReady === false ? 'brightness-75 group-hover:brightness-100' : ''}`} /> {/if}
    {#if !preview && isReady} <img src="/projects/no_image.png" alt="no project" width={450} height={280} class="object-cover w-full h-full" /> {/if}
    {#if !preview && !isReady} <img src="/projects/developing.png" alt="developing project" width={450} height={280} class="object-cover w-full h-full brightness-75 group-hover:brightness-100" /> {/if}
    {#if !isReady}
      <span class="absolute bottom-0 w-full text-xl text-text-negative px-4 py-3 bg-gradient-to-r from-bg-active to-bg-active-light group-hover:invisible">
        En Desarrollo
      </span>
    {/if}
  </div>
  <div class="flex items-center gap-2 px-1 mt-3 min-h-[36px]">
    <PreviewLogo id={id} style="fill-text-primary stroke-text-primary" />
    <h3 class="text-2xl font-medium">{title}</h3>
  </div>
</a>