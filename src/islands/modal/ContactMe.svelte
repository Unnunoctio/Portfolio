<script>
  import Modal from "./Modal.svelte";

  let showModal = false;
</script>

<button
  on:click={() => (showModal = true)}
  class="px-3 py-1 w-full rounded-md text-lg text-start text-text-secondary cursor-pointer transition-colors hover:text-hover-text hover:bg-hover-component"
>
  Contacto
</button>

<Modal bind:showModal title="Contáctame">
  <section class="flex flex-col mt-8 py-8 min-h-[50vh]">
    <h3 class="text-xl md:text-2xl font-medium">Hablemos :</h3>
    <div class="flex flex-col gap-4 mt-4 pl-2 md:pl-4 text-md sm:text-lg md:text-xl">
      <div class="flex flex-wrap gap-x-2">
        <span>Email {'>'}</span>
        <a class="text-text-active hover:underline" href="mailto:rafael.carvacho.p@gmail.com" target="_blank" rel="noreferrer">rafael.carvacho.p@gmail.com</a>
      </div>
      <div class="flex flex-wrap gap-x-2">
        <span>LinkedIn {'>'}</span>
        <a class="text-text-active hover:underline" href="https://www.linkedin.com/in/rafael-carvacho-389515265" target="_blank" rel="noreferrer">linkedin.com/in/rafael-carvacho</a>
      </div>
      <div class="flex flex-wrap gap-x-2">
        <span>Github {'>'}</span>
        <a class="text-text-active hover:underline" href="https://github.com/unnunoctio" target="_blank" rel="noreferrer">github.com/Unnunoctio</a>
      </div>
      <div class="flex flex-wrap gap-x-2">
        <span>Website {'>'}</span>
        <a class="text-text-active hover:underline" href="https://unnunoctio-dev.vercel.app" target="_blank" rel="noreferrer">unnunoctio-dev.vercel.app</a>
      </div>
    </div>
  </section>
</Modal>
