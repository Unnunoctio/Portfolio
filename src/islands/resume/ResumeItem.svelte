<script>
  import CertificateIcon from "./CertificateIcon.svelte";
import EducationIcon from "./EducationIcon.svelte";
  import WorkIcon from "./WorkIcon.svelte";

  export let code;
  export let date;
  export let title;
  export let location;
  export let description = null;
  export let certificate = null;
  export let end = false;
</script>

<section class="flex gap-3">
  <div class="flex flex-col items-center w-fit">
    <span class="p-2 border border-divider-component rounded-full">
      {#if code === "education"}
        <EducationIcon style="w-6 h-6 fill-transparent stroke-text-secondary" />
      {:else if code === "work"}
        <WorkIcon style="w-6 h-6 fill-transparent stroke-text-secondary" />
      {/if}
    </span>
    <span class={`h-full w-px ${end ? 'bg-gradient-to-b from-divider-component' : 'bg-divider-component'}`} />
  </div>
  <div class="flex flex-col pb-6">
    <span class="py-1 w-fit">
      <span class="py-1 px-4 border border-divider-component rounded-full">{date}</span>
    </span>
    <div class="flex justify-between items-center gap-2">
      <div>
        <h4 class="text-xl font-medium">{title}</h4>
        <span class="text-md italic text-text-active">{location}</span>
      </div>
      {#if certificate !== null}
        <a href={certificate} aria-label={`${title} certificate pdf`} target="_blank" rel="noreferrer" class="h-fit">
          <CertificateIcon style="w-8 h-8 stroke-text-secondary hover:stroke-text-primary" />
        </a>
      {/if}
    </div>
    {#if description !== null}
      <p class="mt-2 text-md">{description}</p>
    {/if}
  </div>
</section>