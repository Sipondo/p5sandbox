function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    
    // Set text properties
    textSize(48); // big text
    fill(255, 0, 0); // red colour
    text("Hello", 50, 100);
    
    // Different size and colour
    textSize(36); // medium text
    fill(0, 255, 0); // green colour
    text("World!", 200, 150);
    
    // Another text example
    textSize(24); // small text
    fill(0, 0, 255); // blue colour
    text("p5.js", 150, 250);
}

function draw() {
    // No animation needed for this demonstration
}
