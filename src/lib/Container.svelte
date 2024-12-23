<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Fa from 'svelte-fa';
  import A from '$lib/A.svelte';
  import { base } from '$app/paths';

  export let name = 'No name';
  export let email = 'invalid@example.com';
  export let year = new Date().getFullYear();
</script>

<div class="md:w-[75%] md:max-w-[1024px] md:mx-auto">
  <div class="px-2 md:px-8 py-6 text-right text-white">
    <h1 class="text-3xl text-white font-light font-serif border-b pb-1 mb-1 border-white">{name}</h1>
    <A inverse href="mailto:{email}">{email}</A>
  </div>

  <slot/>

  <div class="px-2 md:px-8 my-6 text-center text-white">
    <div class="text-sm text-white border-t pt-1 mt-1 border-white">Copyright &copy; {year} {name}</div>
  </div>
</div>
