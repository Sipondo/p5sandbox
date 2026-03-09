// Debug challenge 4: loop logic.
// Goal: draw exactly 10 same-size circles in one row.

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(248);

  for (let i = 0; i <= 10; i++) { // BUG: draws 11 circles
    let x = 50 + i * 62;
    let d = 28 + i * 3; // BUG: size should stay constant

    fill(70, 160, 230);
    noStroke();
    circle(x, height * 0.5, d);
  }

  fill(20);
  textSize(14);
  text('Expected: 10 circles, same size.', 20, 30);
}
