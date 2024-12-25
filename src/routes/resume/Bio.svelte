<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Card from '$lib/Card.svelte';
  import P from '$lib/P.svelte';

  export let title = "Skills"
  export let bio = {
    headline: 'No headline',
    summary: []
  };
</script>

<Card title={title}>
  <P class="italic">{bio.headline}</P>

  {#each bio.summary as p}
    <P>{p}</P>
  {/each}
</Card>
