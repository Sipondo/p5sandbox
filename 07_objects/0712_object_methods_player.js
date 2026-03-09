let player = {
  x: 350,
  y: 220,
  size: 52,
  speed: 4,
  moveLeft: function() { this.x -= this.speed; },
  moveRight: function() { this.x += this.speed; },
  moveUp: function() { this.y -= this.speed; },
  moveDown: function() { this.y += this.speed; },
  clamp: function() {
    this.x = constrain(this.x, this.size / 2, width - this.size / 2);
    this.y = constrain(this.y, this.size / 2, height - this.size / 2);
  }
};

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(245);

  if (keyIsDown(LEFT_ARROW)) player.moveLeft();
  if (keyIsDown(RIGHT_ARROW)) player.moveRight();
  if (keyIsDown(UP_ARROW)) player.moveUp();
  if (keyIsDown(DOWN_ARROW)) player.moveDown();
  player.clamp();

  fill(20);
  textSize(16);
  text('Object methods controlling movement', 20, 30);
  textSize(13);
  text('Use arrow keys to move', 20, 52);

  fill(240, 120, 60);
  circle(player.x, player.y, player.size);
}
