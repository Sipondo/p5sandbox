function setup() {
    createCanvas(400, 400);
    background(220);
    noStroke();
    
    // Fully opaque circle
    fill(255, 0, 0, 255);
    ellipse(150, 150, 100, 100);
    
    // Semi-transparent circle
    fill(0, 255, 0, 127);
    ellipse(200, 150, 100, 100);
    
    // More transparent circle
    fill(0, 0, 255, 64);
    ellipse(250, 150, 100, 100);
    
    // Overlapping shapes
    fill(255, 0, 0, 100);
    rect(100, 250, 100, 100);
    fill(0, 0, 255, 100);
    rect(150, 250, 100, 100);
}

function draw() {
    // Static drawing
}
