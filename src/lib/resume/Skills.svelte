<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Card from '$lib/Card.svelte';

  export let title="Skills"
  export let skills = []
</script>

<Card title={title}>
  <ul class="grid md:grid-cols-2 xl:grid-cols-3 leading-loose">
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</Card>
