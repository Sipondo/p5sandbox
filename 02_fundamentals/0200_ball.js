let x = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    // Draw a circle at position x
    fill(255, 0, 0);
    ellipse(x, 200, 50, 50);
    
    // Move the circle
    x += 2;
    
    // Reset position when it goes off screen
    if (x > width) {
        x = 0;
    }
}
