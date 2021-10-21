<script>
  export let modalId, src, alt, caption;

  const dataTarget = `#${modalId}`;
</script>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target={dataTarget}
  ><img {src} class="img-fluid" {alt} /></button
>
<div id={modalId} class="modal fade" tabindex="0" role="dialog">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-body">
        <img {src} class="img-fluid" {alt} />
        {#if caption}
          <p>{caption}</p>
        {/if}
      </div>
    </div>
  </div>
</div>
