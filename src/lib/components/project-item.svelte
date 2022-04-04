<script>
  export let title = '',
    description = '',
    projectLink = '',
    sourceCodeLink = '',
    targetValue = '';

  const target = targetValue ? targetValue : '_blank';
</script>

<div class="text-gray-400 py-4">
  <div class="text-xl">{title}</div>
  <div class="text-md">{description}</div>
  <div class="text-blue-400">
    {#if projectLink}
      <a href={projectLink} {target}>Project Page&nbsp;</a>
    {/if}
    <a href={sourceCodeLink} {target}>&nbsp;Source Code</a>
  </div>
</div>
