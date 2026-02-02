let x = [200, 100, 300, 150, 250];
let y = [200, 100, 300, 150, 250];
let speedX = [3, -2, 4, -1, 2];
let speedY = [2, 3, -2, 4, -3];
let diameter = 30;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    // Go over every ball
    for (let i = 0; i < 5; i++) {
        // Draw the ball
        fill(0, 0, 255);
        ellipse(x[i], y[i], diameter, diameter);
        
        // Move the ball
        x[i] += speedX[i];
        y[i] += speedY[i];
        
        // Bounce off edges
        if (x[i] < 0 || x[i] > width) {
            speedX[i] *= -1;
        }
        if (y[i] < 0 || y[i] > height) {
            speedY[i] *= -1;
        }
    }
}
