<script>
  import ContactBlock from '$lib/blocks/contact.svelte';
  import SkillsBlock from '$lib/blocks/skills.svelte';
  import ProjectBlock from '$lib/blocks/project.svelte';
  import SlingerShowdownBlock from '$lib/blocks/slinger-showdown.svelte';
</script>

<div class="container-fluid">
  <div class="row">
    <div class="col text-center">
      <ContactBlock />
    </div>
    <div class="col text-center">
      <ProjectBlock />
    </div>
    <div class="row">
      <div class="col text-center">
        <SkillsBlock />
      </div>
      <div class="col text-center">
        <SlingerShowdownBlock />
      </div>
    </div>
  </div>
</div>
