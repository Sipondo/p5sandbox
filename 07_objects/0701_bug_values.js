// Debug challenge 2: inspect values.
// Goal: smooth horizontal motion with a readable speed.

let x = 60;
let speed = 2;

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(245);

  x += speed;
  speed = speed * 1.2; // BUG: speed keeps exploding every frame

  fill(245, 120, 70);
  circle(x, height * 0.5, 42);

  fill(20);
  textSize(15);
  text('The circle should move steadily left to right.', 20, 30);
}
