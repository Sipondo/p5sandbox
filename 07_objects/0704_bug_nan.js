// Debug challenge 5: NaN / undefined.
// Goal: dot follows the mouse smoothly.

let x = 350;
let y = 200;
let targetX;
let targetY;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(245);

  targetX = mouseX;

  x += (targetX - x) * 0.08;
  y += (targetY - y) * 0.08;

  fill(230, 90, 140);
  noStroke();
  circle(x, y, 36);

  fill(20);
  textSize(14);
  text('The dot should follow both x and y mouse movement.', 20, 30);
}
