// Debug challenge 1: no output.
// Goal: show a moving circle

let x = 40;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(245);

  fill(245);
  nostroke();
  circle(x, height * 0.5, 50);

  x += 2;
  if (x > width + 25) {
    x = -25;
  }
}
