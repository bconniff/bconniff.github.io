<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Brendan Conniff &mdash; {$page.error.message}</title>
  <meta name="description" content={$page.error.message} />
</svelte:head>

<h1>{$page.status}: {$page.error.message}</h1>
