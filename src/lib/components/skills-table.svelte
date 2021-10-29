<script>
  const skills = {
    'Web-Oriented': ['HTML5', 'JavaScript', 'TypeScript', 'CSS', 'SASS'],
    Frameworks: ['Svelte', 'Marko', 'React', 'Vue', 'Angular', 'Tailwind', 'Bootstrap'],
    'Server-Side': ['MongoDB', 'Node.js', 'Firebase', 'GraphQL', 'SQL', 'AWS S3', 'Docker']
  };
</script>

<div class="grid grid-cols">
  <table class="table-fixed border-2 border-gray-700">
    <tr>
      {#each Object.keys(skills) as skillType}
        <th class="border-2 border-gray-700">{skillType}</th>
      {/each}
    </tr>
    {#each skills['Frameworks'] as _, index}
      <tr>
        {#each Object.keys(skills) as skillType}
          {#if skills[skillType][index]}
            <td class="border-2 border-gray-700">{skills[skillType][index]}</td>
          {:else if !skills[skillType][index] && index === 5}
            <th class="border-2 border-gray-700">Other</th>
          {:else}
            <td class="border-2 border-gray-700">Python</td>
          {/if}
        {/each}
      </tr>
    {/each}
  </table>
</div>
