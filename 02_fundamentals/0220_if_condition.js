function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    // Draw a line dividing the canvas
    stroke(0);
    line(200, 0, 200, 400);
    
    // Change color based on mouse position
    if (mouseX < 200) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 255);
    }
    
    ellipse(mouseX, mouseY, 50, 50);
}
