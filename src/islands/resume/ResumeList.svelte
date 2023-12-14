<script>
  import ResumeItem from "./ResumeItem.svelte";
  export let items = [];
  export let style; 
</script>

<div class={style}>
  {#each items as item, index}
    <ResumeItem {...item} end={index === items.length - 1} />
  {/each}
</div>

