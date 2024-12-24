<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  export let title = 'No title';
</script>

<div class="my-6 shadow-2xl md:rounded-lg p-4 bg-gradient-to-br from-zinc-50 to-zinc-300/95 dark:from-zinc-50/10 dark:to-zinc-300/5 dark:text-white dark:shadow-none">
  <h1 class="text-2xl border-b-2 pb-2 mb-4 border-zinc-300 dark:border-none font-serif">{title}</h1>
  <slot></slot>
</div>
