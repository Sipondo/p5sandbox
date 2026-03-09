// Debug challenge 3: scope bug.
// Goal: move player with arrow keys.

let speed = 4;

function setup() {
  createCanvas(700, 400);
  let playerX = width * 0.5; // BUG: should not be local to setup
  let playerY = height * 0.5; // BUG: should not be local to setup
}

function draw() {
  background(245);

  if (keyIsDown(LEFT_ARROW)) playerX -= speed;
  if (keyIsDown(RIGHT_ARROW)) playerX += speed;
  if (keyIsDown(UP_ARROW)) playerY -= speed;
  if (keyIsDown(DOWN_ARROW)) playerY += speed;

  fill(40, 130, 230);
  circle(playerX, playerY, 40);
}
