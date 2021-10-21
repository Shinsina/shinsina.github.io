<script>
  export let title, description, projectLink, sourceCodeLink, targetValue;

  const target = targetValue ? targetValue : '_blank';
</script>

<br />{title}
<br />{description}
{#if projectLink}
  <br /><a href={projectLink} {target}>Project Page&nbsp;</a>
{/if}
<a href={sourceCodeLink} {target}>&nbsp;Source Code</a>
