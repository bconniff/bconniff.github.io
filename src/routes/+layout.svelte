<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import '../app.css';
  import Container from '$lib/Container.svelte';

  let { children } = $props();
</script>

{@render children()}
