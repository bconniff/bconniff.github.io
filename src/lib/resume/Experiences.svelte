<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import Card from '$lib/Card.svelte';
  import Section from '$lib/Section.svelte';
  import P from '$lib/P.svelte';

  export let title = "Experiences"
  export let experiences = [
    {
      name: 'No name',
      location: 'No location',
      border: 'border-zinc-500',
      header: 'border-zinc-300',
      positions: [
        {
          name: 'No name',
          startDate: 'Start date',
          endDate: 'End date'
        }
      ],
      summary: [],
      achievements: [],
    }
  ];
</script>

{#if experiences.length}
  <Card title={title}>
    {#each experiences as experience}
    <Section
        divider
        border={experience.border}
        header={experience.header}
        title={experience.name}
        subtitle={experience.location}>

        <ul slot="header-right" class="list-['–_'] pl-4 py-2 leading-relaxed screen:sm:grow screen:sm:list-none screen:sm:pl-0 screen:sm:py-0 screen:sm:leading-normal">
          {#each experience.positions as position}
            <li class="screen:sm:text-right">
              <span>{position.name}</span>
              <span class="screen:text-indigo-800 dark:text-indigo-300 ml-2 text-sm">
                {position.startDate}
                {#if position.endDate}
                  &ndash; {position.endDate}
                {/if}
              </span>
            </li>
          {/each}
        </ul>

        {#each experience.summary as p}
          <P>{p}</P>
        {/each}

        {#if experience.achievements.length}
          <h3 class="font-serif text-lg mt-2 screen:text-zinc-500 dark:text-zinc-300">Achievements</h3>
          <ul class="list-['–_'] pl-4 leading-snug">
            {#each experience.achievements as achievement}
              <li class="my-2">{achievement}</li>
            {/each}
          </ul>
        {/if}
    </Section>
    {/each}
  </Card>
{/if}
