<script>
  import Modal from "./Modal.svelte";

  let showModal = false;
</script>

<button
  on:click={() => (showModal = true)}
  class="px-3 py-1 w-full rounded-md text-lg text-start text-text-secondary cursor-pointer transition-colors hover:text-hover-text hover:bg-hover-component"
>
  Sobre mí
</button>

<Modal bind:showModal title="Sobre mí">
  <section class="flex items-center mt-8 min-h-[50vh]">
    <div class="flex flex-col lg:flex-row justify-between gap-8">
      <div class="flex justify-center items-center">
        <img src="/user.png" alt="my profile" width={500} height={500} class="w-72 md:w-80 aspect-square object-cover rounded-full" />
      </div>
      <div class="flex flex-col gap-8 lg:max-w-[60%]">
        <div>
          <h2 class="text-2xl sm:text-3xl font-medium">Soy Rafael Carvacho</h2>
          <h3 class="text-xl sm:text-2xl italic text-text-active">Web Developer & Software Developer</h3>
        </div>
        <p class="text-lg sm:text-xl text-text-secondary">
          Desarrollador de software con experiencia en diversos proyectos, que van desde aplicaciones web hasta software de escritorio. Busco oportunidades 
          para expandir mis habilidades y conocimientos, manteniéndome actualizado con las últimas tecnologías y tendencias en el campo. Invierto tiempo en 
          proyectos personales, además de estar activamente involucrado en comunidades de desarrollo.
        </p>
      </div>
    </div>
  </section>
</Modal>