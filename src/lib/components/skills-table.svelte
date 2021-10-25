<script>
  const skills = {
    'Web-Oriented': ['HTML5', 'JavaScript', 'TypeScript', 'CSS', 'SASS'],
    Frameworks: ['Svelte', 'Marko', 'React', 'Vue', 'Angular', 'Tailwind', 'Bootstrap'],
    'Server-Side': ['MongoDB', 'Node.js', 'Firebase', 'GraphQL', 'SQL', 'AWS S3', 'Docker']
  };
</script>

<table class="table lead table-bordered">
  <tr>
    {#each Object.keys(skills) as skillType}
      <th>{skillType}</th>
    {/each}
  </tr>
  {#each skills['Frameworks'] as _, index}
    <tr>
      {#each Object.keys(skills) as skillType}
        {#if skills[skillType][index]}
          <td>{skills[skillType][index]}</td>
        {:else if !skills[skillType][index] && index === 5}
          <th>Other</th>
        {:else}
          <td>Python</td>
        {/if}
      {/each}
    </tr>
  {/each}
</table>
