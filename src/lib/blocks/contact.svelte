<script>
  import ContactItem from '$lib/components/contact-item.svelte';
</script>

<div class="jumbotron bg-transparent jumbotron-fluid">
  <h1>Jake Collins</h1>
  <p class="lead">
    Emerging full-stack engineer, providing creative, efficient, and effective solutions to common
    problems.
  </p>
  <ul class="nav justify-content-center lead">
    <ContactItem
      faData="fa fa-envelope"
      linkValue="mailto:shinsina@att.net"
      linkLabel="&nbsp;shinsina@att.net"
    />
    <ContactItem
      faData="fa fa-copy"
      linkValue="Resume%20(Jake%20Collins).pdf"
      linkLabel="&nbsp;Resume"
    />
    <ContactItem
      faData="fa fa-github"
      linkValue="https://github.com/Shinsina?tab=repositories"
      linkLabel="&nbsp;GitHub"
    />
    <ContactItem
      faData="fa fa-linkedin"
      linkValue="https://www.linkedin.com/in/jake-collins-6a3768198"
      linkLabel="&nbsp;LinkedIn"
    />
  </ul>
</div>
