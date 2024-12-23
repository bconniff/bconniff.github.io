<!-- vim:set ft=html sw=2 sts=2 ts=2: -->

<script>
  import ResumeCard from '$lib/ResumeCard.svelte';

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
  <ResumeCard title={title}>
    {#each experiences as experience}
      <div class="border-l-4 px-4 mt-4 {experience.border}">
        <div class="sm:flex border-b mb-2 pb-2 border-zinc-300">
          <div class="leading-tight">
            <h2 class="font-light text-xl font-serif {experience.header}">
              <span>{experience.name}</span>
            </h2>
            <span class="text-sm italic text-zinc-800">{experience.location}</span>
          </div>

          <ul class="list-['–_'] pl-4 py-2 leading-relaxed sm:grow sm:list-none sm:pl-0 sm:py-0 sm:leading-normal">
            {#each experience.positions as position}
              <li class="sm:text-right">
                <span>{position.name}</span>
                <span class="text-indigo-800 ml-2 text-sm">
                  {position.startDate}
                  {#if position.endDate}
                    &ndash; {position.endDate}
                  {/if}
                </span>
              </li>
            {/each}
          </ul>
        </div>

        {#each experience.summary as p}
          <p class="mt-2 text-justify">{p}</p>
        {/each}

        {#if experience.achievements.length}
          <h3 class="font-serif text-lg mt-2 text-zinc-500">Achievements</h3>
          <ul class="list-['–_'] pl-4 leading-snug">
            {#each experience.achievements as achievement}
              <li class="my-2">{achievement}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </ResumeCard>
{/if}
