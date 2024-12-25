<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import '../app.css';
  import Container from '$lib/Container.svelte';
  import Fa from 'svelte-fa';
  import Nav from '$lib/Nav.svelte';
  import A from '$lib/A.svelte';
  import { base } from '$app/paths';

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

  const navs = [
    { icon: faHouse, name: 'Home', href: `${base}/` },
    { icon: faAddressCard, name: 'Resume', href: `${base}/resume` },
    { icon: faGithub, name: 'Github', href: 'https://github.com/bconniff', target: '_blank' },
    { icon: faLinkedin, name: 'LinkedIn', href: 'https://linkedin.com/in/brendan-conniff', target: '_blank' },
    { icon: faSalesforce, name: 'Trailhead', href: 'https://trailhead.salesforce.com/en/me/brendanconniff', target: '_blank' },
    { icon: faEnvelope, name: 'Email', href: 'mailto:brendan.conniff@gmail.com', target: '_blank' },
  ];

  let { children } = $props();
</script>

<Nav {navs} />

<Container name="Brendan Conniff" email="brendan.conniff@gmail.com">
  {@render children()}
</Container>

<style>
  @page {
    margin: 0.75in;
  }
</style>
