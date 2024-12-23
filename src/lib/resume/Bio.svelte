<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Card from '$lib/Card.svelte';

  export let title = "Skills"
  export let bio = {
    headline: 'No headline',
    summary: []
  };
</script>

<Card title={title}>
  <p class="text-justify italic">{bio.headline}</p>

  {#each bio.summary as p}
    <p class="mt-2 text-justify">{p}</p>
  {/each}
</Card>
