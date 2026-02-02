function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    
    // Set text properties
    textSize(48); // big text
    fill(255, 0, 0); // red colour
    text("Hello", 50, 100);
    
    // Draw an ellipse
    fill(0, 255, 0); // green colour
    ellipse(300, 100, 120, 80);
    
    // Draw a rounded rectangle
    fill(0, 0, 255); // blue colour
    rect(100, 200, 200, 100, 20); // The 5th argument is *optional* and defines the corner radius
}

function draw() {
    // No animation needed for this demonstration
}
