function setup() {
    createCanvas(400, 400);
    background(220);
    
    // Draw a grid of circles using nested loops
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            fill(i * 40, j * 40, 150);
            ellipse(50 + i * 60, 50 + j * 60, 40, 40);
        }
    }
}

function draw() {
    // No animation needed for this demonstration
}
