<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Bio from './Bio.svelte';
  import Experiences from './Experiences.svelte';
  import Certifications from './Certifications.svelte';
  import Skills from './Skills.svelte';

  import { bio, work, education, authorities, skills } from './data.js';
</script>

<svelte:head>
  <title>Brendan Conniff &mdash; Resume</title>
  <meta name="description" content="Resume for Brendan Conniff, Sr Manager at Fortimize" />
</svelte:head>

<Bio title="Summary" {bio} />
<Experiences title="Work Experience" experiences={work} />
<Experiences title="Education" experiences={education} />
<Certifications title="Certifications" {authorities} />
<Skills title="Additional Skills" {skills} />
