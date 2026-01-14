function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    fill(100, 200, 100);
    
    // Draw different shapes based on mouse y position
    if (mouseY < 200) {
        ellipse(200, 200, 100, 100);
    } else {
        rect(150, 150, 100, 100);
    }
}
