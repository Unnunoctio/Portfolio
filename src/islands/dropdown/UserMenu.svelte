<script>
  import UserIcon from "./UserIcon.svelte";
  import AboutMe from "../modal/AboutMe.svelte";
  import Resume from "../modal/Resume.svelte";
  import ContactMe from "../modal/ContactMe.svelte";

  let isMenuOpen = false;
  let container;

  const handleMenu = () => {
    isMenuOpen = !isMenuOpen
  }
  function onWindowClick(e) {
    if (container.contains(e.target) === false) isMenuOpen = false
  }
</script>

<svelte:window on:click={onWindowClick} />

<div bind:this={container} class="relative inline-block text-left">
  <button on:click={handleMenu} aria-label="menu" class={`group flex justify-center p-3 bg-bg-btn rounded-2xl shadow-btn transition-colors hover:bg-hover-btn ${isMenuOpen ? "bg-hover-btn": ""}`}>
    <UserIcon style={`h-7 w-7 transition-colors group-hover:fill-hover-text ${isMenuOpen ? "fill-hover-text" : "fill-text-secondary"}`} />
  </button>
  {#if isMenuOpen}
    <section
      class="absolute end-0 lg:end-15 top-15 lg:top-0 z-50 mt-0 w-60 origin-top-rigth bg-bg-component rounded-md shadow-btn focus:outline-none"
    >
      <div class="divide-y divide-divider-component">
        <h3 class="text-lg text-text-primary font-medium px-5 py-4 select-none">
          Rafael Carvacho <span class="text-text-active">#WEB</span>
        </h3>
        <ul class="flex flex-col gap-3 p-5">
          <li> <AboutMe /> </li>
          <li> <Resume /> </li>
          <li> <ContactMe /> </li>
        </ul>
      </div>
    </section>
  {/if}
</div>