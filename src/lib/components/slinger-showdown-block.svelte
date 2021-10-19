<div class="container-fluid">
	<h3>Slinger Showdown</h3>
	<p class="lead">A simple top down checkpoint based arcade racer built using Pygame</p>
	<div class="row">
		<div class="col-sm-4" align="left">
			<h2>About The Game</h2>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"
				><img src="GameManual.png" class="img-fluid" alt="Game Manual" /></button
			>
			<div id="myModal" class="modal fade" tabindex="0" role="dialog">
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-body">
							<img src="GameManual.png" class="img-fluid" alt="Game Manual" />
						</div>
					</div>
				</div>
			</div>
			<p />
		</div>
		<div class="col-sm-4">
			<h2>Gameplay Demo</h2>
			<p align="left" />
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
		<div class="col-sm-4">
			<h2 align="left">Breakthrough</h2>
			<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal2"
				><img src="Breakthrough.png" class="img-fluid" alt="Breakthrough" /></button
			>
			<div id="myModal2" class="modal fade" tabindex="0" role="dialog">
				<div class="modal-dialog modal-xl">
					<div class="modal-content">
						<div class="modal-body">
							<img src="Breakthrough.png" class="img-fluid" alt="Breakthrough" />
							<p>
								This is the update method for the car onscreen, the "breakthrough" here was solving
								how to do collision detection. One coordinate direction (X or Y) is verified as
								colliding and then whatever one was NOT verified as colliding is then set to the
								appropriate value. This alongside the self.angle calculation utilizing a normal
								vector of the movement vector by which is based on the x and y coordinate change
								between each checkpoint results in the car traveling around the track between the
								checkpoints in the desired motion. Taking this "angle" of a mathematics approach to
								problem solving I have found be very helpful in solving many issues I have faced via
								programming in my personal projects.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
