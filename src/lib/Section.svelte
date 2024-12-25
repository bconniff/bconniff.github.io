<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  export let border = 'border-indigo-600 dark:border-indigo-400';
  export let header = 'text-indigo-600 dark:text-indigo-400';
  export let title = 'No title';
  export let subtitle = null;
  export let divider = false;
</script>

<div class="border-l-4 screen:px-4 mt-4 print:border-none {border}">
  <div class="flex flex-wrap print:border-none {divider ? 'border-b border-zinc-300 dark:border-zinc-600 screen:mb-2 screen:pb-2' : ''}">
    <div class="leading-tight">
      <h2 class="font-light text-xl font-serif print:text-black {header}">
        <span>{title}</span>
      </h2>
      {#if subtitle}
        <h3 class="text-sm italic screen:text-zinc-600 dark:text-zinc-300">{subtitle}</h3>
      {/if}
    </div>

    <div class="grow w-full screen:sm:w-auto">
      <slot name="header-right" />
    </div>
  </div>

  <slot />
</div>
