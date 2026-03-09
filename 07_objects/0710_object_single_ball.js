let ball = { // Init an object
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
  
  if (ball.x < 0 || ball.x > width){
    ball.speedX *= -1; // Bounce horizontally
  }
  if (ball.y < 0 || ball.y > height){
    ball.speedY *= -1; // Bounce vertically
  }

  fill(20);
  textSize(16);
  text('Single object with properties', 20, 30);

  fill(70, 140, 230);
  circle(ball.x, ball.y, ball.size);

  fill(20);
  textSize(13);
  text('ball.x: ' + ball.x, 20, 350);
  text('ball.speedX: ' + ball.speedX, 20, 370);
}
