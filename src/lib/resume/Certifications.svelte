<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Card from '$lib/Card.svelte';

  export let title = "Certifications";
  export let authorities = [];
</script>

<Card title={title}>
  {#each authorities as authority}
    <div class="border-l-4 px-4 mt-4 {authority.border}">
      <h2 class="font-light text-xl font-serif leading-tight {authority.header}">{authority.by}</h2>
      <ul class="grid lg:grid-cols-2 mt-2 sm:pl-4 leading-snug">
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
    </div>
  {/each}
</Card>

