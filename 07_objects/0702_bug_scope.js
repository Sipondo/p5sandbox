// Debug challenge 3: scope bug.
// Goal: move player with arrow keys. Go diagonal when multiple are pressed.

let speed = 4;

function setup() {
  createCanvas(700, 400);
  let playerX = width * 0.5;
  let playerY = height * 0.5;
}

function draw() {
  background(245);

  if (keyIsDown(LEFT_ARROW)){
    playerX -= speed;
  } else
  if (keyIsDown(RIGHT_ARROW)){
    playerX += speed;
  } else
  if (keyIsDown(UP_ARROW)) {
    playerY -= speed;
  } else
  if (keyIsDown(DOWN_ARROW)) {
    playerY += speed;
  }

  fill(40, 130, 230);
  circle(playerX, playerY, 40);
}
