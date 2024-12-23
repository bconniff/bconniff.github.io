<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import { base } from '$app/paths';
  import A from '$lib/A.svelte';
  import P from '$lib/P.svelte';
  import Container from '$lib/Container.svelte';
  import Section from '$lib/Section.svelte';
  import Card from '$lib/Card.svelte';
</script>

<svelte:head>
  <title>Brendan Conniff &mdash; Home</title>
  <meta name="description" content="Home Page for Brendan Conniff" />
</svelte:head>

<Card title="About Me">
  <img alt="Headshot" src="{base}/headshot.jpg" class="w-64 rounded-lg mx-auto outline outline-1 outline-offset-2 outline-zinc-300"/>

  <Section title="My info">
    <P>
      I'm Brendan Conniff, a software developer living in Summerville, SC. My
      hobbies include running, video games, and programming. You can find my
      <A href="{base}/resume">resumé for more info</A>, or check out the links
      in the navigation at the top of the page to find me on other sites.
    </P>
  </Section>
</Card>
