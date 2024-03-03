<script>
  export let title;
  export let body;
  export let style;
</script>

<div class={style}>
  <h3 class="text-md text-text-ternary font-bold">{title}</h3>
  <div class="flex gap-2 items-center">
    <slot />
    <span class="text-xl font-medium">{body}</span>
  </div>
</div>