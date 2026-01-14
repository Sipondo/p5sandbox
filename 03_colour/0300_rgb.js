function setup() {
    createCanvas(400, 400);
    background(255);
    noStroke();
    
    // Red
    fill(255, 0, 0);
    rect(50, 50, 100, 100);
    
    // Green
    fill(0, 255, 0);
    rect(150, 50, 100, 100);
    
    // Blue
    fill(0, 0, 255);
    rect(250, 50, 100, 100);
    
    // Cyan (green + blue)
    fill(0, 255, 255);
    rect(50, 200, 100, 100);
    
    // Magenta (red + blue)
    fill(255, 0, 255);
    rect(150, 200, 100, 100);
    
    // Yellow (red + green)
    fill(255, 255, 0);
    rect(250, 200, 100, 100);
}

function draw() {
    // Static drawing
}
