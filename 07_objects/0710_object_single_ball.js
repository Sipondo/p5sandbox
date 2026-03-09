let ball = {
  x: 120,
  y: 200,
  size: 48,
  speedX: 2.6,
  speedY: 1.8
};

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(247);

  ball.x += ball.speedX;
  ball.y += ball.speedY;

  if (ball.x < ball.size / 2 || ball.x > width - ball.size / 2) ball.speedX *= -1;
  if (ball.y < ball.size / 2 || ball.y > height - ball.size / 2) ball.speedY *= -1;

  fill(20);
  textSize(16);
  text('Single object with properties', 20, 30);

  fill(70, 140, 230);
  circle(ball.x, ball.y, ball.size);

  fill(20);
  textSize(13);
  text('ball.x: ' + ball.x.toFixed(1), 20, 350);
  text('ball.speedX: ' + ball.speedX.toFixed(1), 20, 370);
}
