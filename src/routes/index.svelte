<script>
  import ContactBlock from '$lib/components/contact-block.svelte';
  import SkillsTable from '$lib/components/skills-table.svelte';
  import ProjectList from '$lib/components/project-list.svelte';
  import SlingerShowdownBlock from '$lib/components/slinger-showdown-block.svelte';
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col text-center">
      <ContactBlock />
    </div>
    <div class="col-8 text-center">
      <ProjectList />
    </div>
    <div class="row">
      <div class="col text-center">
        <SkillsTable />
      </div>
      <div class="col-8 text-center">
        <SlingerShowdownBlock />
      </div>
    </div>
  </div>
</div>
