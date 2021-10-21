<script>
  import ProjectItem from '$lib/components/project-item.svelte';
</script>

<br />
<h2>Projects</h2>
<div class="row">
  <div class="col">
    <p class="lead">
      <ProjectItem
        title="Ausick"
        description="A marketing app built using Vue (with TypeScript), Tailwind, Express, GraphQL and MongoDB"
        sourceCodeLink="https://github.com/Shinsina/Ausick"
      />
      <ProjectItem
        title="FaceChat"
        description="A messaging app built using React, Tailwind and Firebase"
        sourceCodeLink="https://github.com/Shinsina/CS-458-Chat-Application"
      />
    </p>
  </div>
  <div class="col">
    <p class="lead">
      <ProjectItem
        title="Treeze"
        description="A blog app built using React, Tailwind and Firebase"
        sourceCodeLink="https://github.com/Shinsina/Treeze"
      />
      <br />
      <ProjectItem
        title="Shinsina Utilities"
        description="Various utility functions utilizing Node.js"
        sourceCodeLink="https://github.com/Shinsina/Shinsina-Utilities"
      />
    </p>
  </div>
  <div class="col">
    <p class="lead">
      <ProjectItem
        title="The Living Log"
        description="A web forum built using Django and Bootstrap"
        projectLink="https://the-living-log.herokuapp.com/"
        sourceCodeLink="https://github.com/Shinsina/The-Living-Log"
      />
      <br />
      <ProjectItem
        title="Slinger Showdown"
        description="Programming in Game Engines final project built using Pygame"
        sourceCodeLink="https://github.com/Shinsina/Slinger-Showdown"
      />
    </p>
  </div>
</div>
