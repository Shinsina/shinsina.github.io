<script>
  export let linkValue, linkLabel, faData, targetValue;

  const className = faData ? `nav-item nav-link ${faData}` : 'nav-item nav-link';
  const target = targetValue ? targetValue : '_blank';
</script>

<li class="nav-item">
  <a class={className} href={linkValue} {target}>{linkLabel}</a>
</li>
