<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  export let border = 'border-indigo-600 dark:border-indigo-400';
  export let header = 'text-indigo-600 dark:text-indigo-400';
  export let title = 'No title';
  export let subtitle = null;
  export let divider = false;
</script>

<div class="border-l-4 px-4 mt-4 {border}">
  <div class="flex flex-wrap {divider ? 'border-b border-zinc-300 dark:border-zinc-600 mb-2 pb-2' : ''}">
    <div class="leading-tight">
      <h2 class="font-light text-xl font-serif {header}">
        <span>{title}</span>
      </h2>
      {#if subtitle}
        <h3 class="text-sm italic text-zinc-600 dark:text-zinc-300">{subtitle}</h3>
      {/if}
    </div>

    <div class="grow w-full sm:w-auto">
      <slot name="header-right" />
    </div>
  </div>

  <slot />
</div>
