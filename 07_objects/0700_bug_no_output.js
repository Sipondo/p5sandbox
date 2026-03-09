// Debug challenge 1: no output.
// Goal: show a moving circle on a light background.

let x = 40;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  backgrounnd(245); // BUG: typo in function name

  fill(40, 140, 230);
  noStroke();
  circle(x, height * 0.5, 50);

  x += 2;
  if (x > width + 25) {
    x = -25;
  }
}
