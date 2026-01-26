function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    
    // Draw a square
    fill(255, 0, 0); // red colour
    rect(50, 50, 80, 80);
    
    // Draw a rectangle
    fill(0, 255, 0); // green colour
    rect(200, 50, 120, 80);
    
    // Draw a rounded rectangle
    fill(0, 0, 255); // blue colour
    rect(100, 200, 200, 100, 20); // The 5th argument is *optional* and defines the corner radius
}

function draw() {
    // Static drawing
}
