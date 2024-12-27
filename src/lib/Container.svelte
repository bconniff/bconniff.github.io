<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Fa from 'svelte-fa';
  import A from '$lib/A.svelte';
  import { base } from '$app/paths';

  export let name = 'No name';
  export let email = 'invalid@example.com';
  export let year = new Date().getFullYear();
</script>

<div class="screen:md:w-[75%] screen:md:max-w-[1024px] screen:md:mx-auto">
  <header class="screen:px-2 screen:md:px-8 my-6 print:mt-0 screen:text-right print:leading-tight">
    <h1 class="text-3xl screen:text-white font-light font-serif border-b screen:pb-1 screen:mb-1 border-white print:border-none print:inline">{name}</h1>
    <A inverse class="print:ml-4" href="mailto:{email}">{email}</A>
  </header>

  <main>
    <slot />
  </main>

  <footer class="screen:px-2 screen:md:px-8 my-6 text-center screen:text-white">
    <div class="text-sm border-t pt-1 mt-1 border-white print:border-none">Copyright &copy; {year} {name}</div>
  </footer>
</div>
