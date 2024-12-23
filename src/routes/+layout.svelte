<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import '../app.css';

  let { children } = $props();

  export const prerender = true;
</script>

{@render children()}
