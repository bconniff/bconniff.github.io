<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Fa from 'svelte-fa'

  import {
    faHouse,
    faAddressCard,
    faEnvelope,
  } from '@fortawesome/free-solid-svg-icons'

  import {
    faGithub,
    faLinkedin,
    faSalesforce,
  } from '@fortawesome/free-brands-svg-icons';

  export let name = 'No name';
  export let email = 'invalid@example.com';
  export let year = new Date().getFullYear();
  export let navs = [
    { icon: faHouse, name: 'Home', href: 'https://www.brendanconniff.com' },
    { icon: faAddressCard, name: 'Resume', href: 'https://resume.brendanconniff.com' },
    { icon: faGithub, name: 'Github', href: 'https://github.com/bconniff' },
    { icon: faLinkedin, name: 'LinkedIn', href: 'https://linkedin.com/in/brendan-conniff' },
    { icon: faSalesforce, name: 'Trailhead', href: 'https://trailhead.salesforce.com/en/me/brendanconniff' },
    { icon: faEnvelope, name: 'Email', href: 'mailto:brendan.conniff@gmail.com' },
  ];
</script>


<ul class="text-white text-lg sm:text-sm text-center bg-black bg-opacity-50 backdrop-blur-sm sticky top-0 z-50">
  {#each navs as nav}
    <li class="hover:text-sky-300 hover:underline cursor-pointer transition-colors duration-500 inline-block m-2"> <a href={nav.href}>
        <Fa icon={nav.icon} class="w-6 inline-block" /><span class="shrink hidden sm:inline">{nav.name}</span>
      </a>
    </li>
  {/each}
</ul>

<div class="md:w-[75%] md:max-w-[1024px] md:mx-auto">
  <div class="px-2 md:px-8 py-6 text-right text-white">
    <h1 class="text-3xl text-white font-light font-serif border-b pb-1 mb-1 border-white">{name}</h1>
    <a class="hover:text-sky-300 hover:underline cursor-pointer transition-colors duration-500" href="mailto:{email}">{email}</a>
  </div>
</div>

<div class="md:w-[75%] md:max-w-[1024px] md:mx-auto">
  <slot/>

  <div class="px-2 md:px-8 my-6 text-center text-white">
    <div class="text-sm text-white border-t pt-1 mt-1 border-white">Copyright &copy; {year} {name}</div>
  </div>
</div>
