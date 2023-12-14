<script>
    import XIcon from "./XIcon.svelte";

  export let showModal;
  export let title;

  let scrollY;
  let prevBodyPosition;
  let prevBodyOverflow;
  let prevBodyWidth;

  let dialog;
  $: if (dialog && showModal) openModal();

  const openModal = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
  }
  const closeModal = () => {
    document.body.style.position = prevBodyPosition || '';
    document.body.style.top = '';
    document.body.style.overflow = prevBodyOverflow || '';
    document.body.style.width = prevBodyWidth || '';
    window.scrollTo(0, scrollY);

    showModal = false;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
<div
  bind:this={dialog}
  on:click|self={closeModal}
  class={`${showModal ? "visible" : "invisible"} fixed inset-0 overflow-y-auto z-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-bg-component bg-opacity-75`}
>
  <div
    on:click|self={closeModal}
    class="flex justify-center pt-15 px-2 sm:px-6 md:px-8 lg:px-10"
  >
    <div class="relative overflow-hidden z-30 p-4 sm:p-8 md:p-12 w-full max-w-6xl text-text-primary bg-bg-modal rounded-lg shadow-xl">
      <button aria-label="close modal" on:click={closeModal} class="group absolute top-3 sm:top-4 right-3 sm:right-4 flex justify-center p-1.5 bg-bg-btn rounded-md transition-colors hover:bg-hover-btn">
        <XIcon style="h-6 w-6 fill-text-secondary transition-colors group-hover:fill-hover-text" />
      </button>
      <h2 class="text-4xl font-medium text-center md:text-start">{title}</h2>
      <slot />
    </div>
  </div>
</div>
