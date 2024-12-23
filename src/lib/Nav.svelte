<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Fa from 'svelte-fa';
  import A from '$lib/A.svelte';

  import { page } from '$app/stores';  

  export let navs = [];
</script>

<ul class="text-white text-lg sm:text-sm text-center bg-black bg-opacity-50 backdrop-blur-sm sticky top-0 z-50">
  {#each navs as nav}
    {#if $page.url.pathname == nav.href}
      <li class="inline-block p-2 border-b-2 border-amber-300 text-amber-300">
        <Fa icon={nav.icon} class="inline-block" /><span class="ml-1 shrink hidden sm:inline">{nav.name}</span>
      </li>
    {:else}
      <li class="inline-block p-2">
        <A inverse href={nav.href} target={nav.target ?? '_self'}>
          <Fa icon={nav.icon} class="inline-block" /><span class="ml-1 shrink hidden sm:inline">{nav.name}</span>
        </A>
      </li>
    {/if}
  {/each}
</ul>
