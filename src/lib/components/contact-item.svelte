<script>
  export let linkValue, linkLabel, faData, targetValue;

  const className = `text-blue-400 ${faData}`;
  const target = targetValue ? targetValue : '_blank';
</script>

<a class={className} href={linkValue} {target}>{linkLabel}</a>
