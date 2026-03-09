let balls = [];

function setup() {
  createCanvas(700, 400);
  textFont('monospace');

  for (let i = 0; i < 12; i++) {
    balls.push({
      x: random(50, width - 50),
      y: random(80, height - 50),
      size: random(20, 45),
      speedX: random(-2.5, 2.5),
      speedY: random(-2.5, 2.5),
      hue: random(180, 260)
    });
  }
}

function draw() {
  background(246);
  colorMode(HSL, 360, 100, 100);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    ball.x += ball.speedX;
    ball.y += ball.speedY;

    if (ball.x < ball.size / 2 || ball.x > width - ball.size / 2) ball.speedX *= -1;
    if (ball.y < ball.size / 2 || ball.y > height - ball.size / 2) ball.speedY *= -1;

    fill(ball.hue, 70, 55);
    noStroke();
    circle(ball.x, ball.y, ball.size);
  }

  colorMode(RGB, 255);
  fill(20);
  textFont('monospace');
  textSize(16);
  text('Array of objects: each ball stores its own state', 20, 30);
}
