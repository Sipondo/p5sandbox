function setup() {
    createCanvas(400, 400);
    background(220);
    
    // Draw lines
    stroke(255, 0, 0);
    strokeWeight(3);
    line(50, 50, 150, 150);
    line(50, 150, 150, 50);
    
    // Draw a triangle
    fill(0, 255, 0);
    stroke(0);
    strokeWeight(1);
    triangle(250, 100, 200, 180, 300, 180);
    
    // Draw another triangle
    fill(0, 0, 255);
    triangle(200, 250, 300, 250, 250, 350);
}

function draw() {
    // Static drawing
}
