let balls = [];

// Factory function: creates one new ball object with random starting values.
function createBall() {
  return {
    x: random(50, width - 50),
    y: random(80, height - 50),
    size: random(20, 45),
    speedX: random(-2.5, 2.5),
    speedY: random(-2.5, 2.5),
    hue: random(180, 260)
  };
}

function setup() {
  createCanvas(700, 400);
  textFont('monospace');

  // Build an initial collection of balls.
  for (let i = 0; i < 12; i++) {
    balls.push(createBall());
  }
}

function draw() {
  background(246);

  // Update and draw every ball each frame.
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    ball.x += ball.speedX;
    ball.y += ball.speedY;

    if (ball.x < 0 || ball.x > width){
      ball.speedX *= -1; // Bounce horizontally
    }
    if (ball.y < 0 || ball.y > height){
      ball.speedY *= -1; // Bounce vertically
    }

    // Draw the ball with its own color and size.
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
