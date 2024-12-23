<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  export let border = 'border-indigo-300';
  export let header = 'text-indigo-600';
  export let title = 'No title';
  export let subtitle = null;
  export let divider = false;
</script>

<div class="border-l-4 px-4 mt-4 {border}">
  <div class="sm:flex {divider ? 'border-b border-zinc-300 mb-2 pb-2' : ''}">
    <div class="leading-tight">
      <h2 class="font-light text-xl font-serif {header}">
        <span>{title}</span>
      </h2>
      {#if subtitle}
        <span class="text-sm italic text-zinc-800">{subtitle}</span>
      {/if}
    </div>

    <div class="sm:grow">
      <slot name="header-right" />
    </div>
  </div>

  <slot />
</div>
