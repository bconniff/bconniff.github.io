<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Card from '$lib/Card.svelte';
  import Section from '$lib/Section.svelte';
  import Fa from 'svelte-fa';

  export let title = "Certifications";
  export let authorities = [];
</script>

<Card title={title}>
  {#each authorities as authority}
    <Section
        border={authority.border}
        header={authority.header}
        title={authority.by}>

      <ul class="grid lg:grid-cols-2 mt-2 leading-snug">
        {#each authority.certs as cert}
          <li class="my-1">
            <span class="block sm:inline">{cert.title}</span>
            <span class="block sm:inline text-sm text-indigo-800 ml-4 sm:ml-2">
              {cert.startDate}
              {#if cert.endDate}
                <span class="text-zinc-500">&ndash; {cert.endDate}</span>
              {/if}
              {#if cert.subtitle}
                <span class="text-xs italic text-zinc-500">({cert.subtitle})</span>
              {/if}
            </span>
          </li>
        {/each}
      </ul>
    </Section>
  {/each}
</Card>

