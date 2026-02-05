function setup() {
    createCanvas(600, 600);
    background(220);
    
    // Draw a grid of circles using nested loops
    for (let column = 0; column < 6; column++) {
        for (let row = 0; row < 6; row++) {
            fill(column * 40, row * 40, 150);
            ellipse(50 + column * 60, 50 + row * 60, 40, 40);
        }
    }
}

function draw() {
    // No animation needed for this demonstration
}
