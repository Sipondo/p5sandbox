let x = 200;
let y = 200;
let speedX = 3;
let speedY = 2;
let diameter = 30;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    // Draw the ball
    fill(0, 0, 255);
    ellipse(x, y, diameter, diameter);
    
    // Move the ball
    x += speedX;
    y += speedY;
    
    // Bounce off edges
    if (x < diameter/2 || x > width - diameter/2) {
        speedX *= -1;
    }
    if (y < diameter/2 || y > height - diameter/2) {
        speedY *= -1;
    }
}
