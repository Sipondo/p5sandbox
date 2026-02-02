function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    
    // Draw a circle
    fill(255, 0, 0); // red colour
    circle(100, 100, 80);
    
    // Draw an ellipse
    fill(0, 255, 0); // green colour
    ellipse(300, 100, 120, 80);
    
    // Draw another ellipse
    fill(0, 0, 255); // blue colour
    ellipse(200, 250, 80, 120);
}

function draw() {
    // No animation needed for this demonstration
}
