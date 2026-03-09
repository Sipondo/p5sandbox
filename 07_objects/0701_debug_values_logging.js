let x = 40;
let speed = 2.5;

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(250);

  x += speed;
  if (x > width - 20 || x < 20) {
    speed *= -1;
  }

  fill(40);
  textSize(16);
  text('Value debugging with console.log()', 20, 30);
  textSize(14);
  text('Open the Console: we log x and speed every 30 frames.', 20, 55);

  fill(0, 120, 220);
  circle(x, 220, 40);

  fill(40);
  text('x: ' + x.toFixed(2), 20, 350);
  text('speed: ' + speed.toFixed(2), 20, 372);

  if (frameCount % 30 === 0) {
    console.log('frame', frameCount, 'x', x.toFixed(2), 'speed', speed.toFixed(2));
  }
}
