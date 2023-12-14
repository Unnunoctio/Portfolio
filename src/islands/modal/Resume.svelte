<script>
  import data from "../../assets/resumeData.json";
  import Modal from "./Modal.svelte";
  import ResumeList from "../resume/ResumeList.svelte";

  let showModal = false;
</script>

<button
  on:click={() => (showModal = true)}
  class="px-3 py-1 w-full rounded-md text-lg text-start text-text-secondary cursor-pointer transition-colors hover:text-hover-text hover:bg-hover-component"
>
  Resumen
</button>

<Modal bind:showModal title="Trabajo & Educación">
  <section class="flex items-center mt-8 min-h-[50vh]">
    <div class="flex justify-between gap-8">
      <ResumeList
        items={data.filter(item => item.code === "work")}
        style="hidden md:block md:max-w-[47%]"
      />
      <ResumeList
        items={data.filter(item => item.code === "education")}
        style="hidden md:block md:max-w-[47%]"
      />
      <ResumeList
        items={data}
        style="block md:hidden"
      />
    </div>
  </section>
</Modal>