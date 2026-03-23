let x = 100;
let speed;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(245);

  fill(20);
  textSize(16);
  text('NaN guard pattern', 20, 30);
  textSize(14);
  text('Press B to break speed (undefined), then press R to recover.', 20, 55);

  x += speed;

  if (Number.isNaN(x)) {
    fill(220, 40, 40);
    text('x became NaN. Resetting to safe defaults...', 20, 90);
    x = width / 2;
    speed = 2;
  }

  if (x > width - 25 || x < 25) {
    speed *= -1;
  }

  fill(30, 130, 220);
  circle(x, 220, 50);

  fill(20);
  text('x: ' + x.toFixed(2), 20, 350);
  text('speed: ' + speed, 20, 372);
}

function keyPressed() {
  if (key == 'b' || key == 'B') {
    speed = undefined;
    console.log('speed set to undefined');
  }
  if (key == 'r' || key == 'R') {
    speed = 2;
    x = width / 2;
    console.log('values reset');
  }
}
