function move() {
  // Apply current velocity to position each frame.
  this.x += this.vx;
  this.y += this.vy;
}

function clampToCanvas() {
  // Keep the circle fully visible inside the canvas edges.
  this.x = constrain(this.x, this.size / 2, width - this.size / 2);
  this.y = constrain(this.y, this.size / 2, height - this.size / 2);
}

let player = {
  x: 350,
  y: 220,
  vx: 0,
  vy: 0,
  accel: 0.2,
  size: 52,
  move: move,
  clampToCanvas: clampToCanvas
};

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(245);

  // Arrow keys change velocity, not position directly.
  if (keyIsDown(LEFT_ARROW)) {
    player.vx -= player.accel;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.vx += player.accel;
  }
  if (keyIsDown(UP_ARROW)) {
    player.vy -= player.accel;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.vy += player.accel;
  }

  player.move();
  player.clampToCanvas();

  fill(20);
  textSize(16);
  text('Object methods using named functions', 20, 30);
  textSize(13);
  text('Arrow keys change velocity', 20, 52);

  fill(240, 120, 60);
  circle(player.x, player.y, player.size);
}
