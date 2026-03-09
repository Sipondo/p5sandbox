let ballX = 120;
let ballY = 200;
let ballSize = 48;
let ballSpeedX = 2.6;
let ballSpeedY = 1.8;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(247);

  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  if (ballX < 0 || ballX > width){
    ballSpeedX *= -1; // Bounce horizontally
  }
  if (ballY < 0 || ballY > height){
    ballSpeedY *= -1; // Bounce vertically
  }

  fill(20);
  textSize(16);
  text('Single ball with loose variables', 20, 30);

  fill(70, 140, 230);
  circle(ballX, ballY, ballSize);

  fill(20);
  textSize(13);
  text('ballX: ' + ballX, 20, 350);
  text('ballSpeedX: ' + ballSpeedX, 20, 370);
}
