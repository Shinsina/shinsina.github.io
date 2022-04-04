<script>
  import ContactItem from '$lib/components/contact-item.svelte';
</script>

<div class="col-span-12 pt-20">
  <h1 class="text-7xl mb-2">Jake Collins</h1>
  <p class="text-gray-400 text-lg my-3">
    Emerging full-stack engineer, providing creative, efficient, and effective solutions to common
    problems.
  </p>
  <div class="grid md:grid-cols-4">
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
      linkValue="https://github.com/Shinsina"
      linkLabel="&nbsp;GitHub"
    />
    <ContactItem
      faData="fa fa-linkedin"
      linkValue="https://www.linkedin.com/in/jake-collins-6a3768198"
      linkLabel="&nbsp;LinkedIn"
    />
  </div>
</div>
