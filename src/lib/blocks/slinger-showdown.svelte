<script>
  import ModalItem from '$lib/components/modal-item.svelte';

  const caption =
    'This is the update method for the car onscreen, the "breakthrough" here was solving how to do collision detection. One coordinate direction (X or Y) is verified ascolliding and then whatever one was NOT verified as colliding is then set to the appropriate value. This alongside the self.angle calculation utilizing a normal vector of the movement vector by which is based on the x and y coordinate change between each checkpoint results in the car traveling around the track between the checkpoints in the desired motion. Taking this "angle" of a mathematics approach to problem solving I have found be very helpful in solving many issues I have faced via programming in my personal projects.';
</script>

<h2>Slinger Showdown</h2>
<p class="lead">A simple top down checkpoint based arcade racer built using Pygame</p>
<div class="row">
  <div class="col">
    <h3>About The Game</h3>
    <ModalItem modalId="modal1" src="GameManual.png" alt="Game Manual" />
  </div>
  <div class="col">
    <h3>Gameplay Demo</h3>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        src="Gameplay Demo.mp4"
        title="Gameplay Demo"
        allowfullscreen
        muted
      />
    </div>
  </div>
  <div class="col">
    <h3>Breakthrough</h3>
    <ModalItem modalId="modal2" src="Breakthrough.png" alt="Game Manual" {caption} />
  </div>
</div>
