function setup() {
    createCanvas(600, 600);
    background(220);
    
    // Draw a row of circles using a loop
    for (let i = 0; i < 8; i++) {
        fill(255, 0, 0);
        ellipse(50 + i * 50, 100, 40, 40);
    }
    
    // Draw a column of squares using a loop
    for (let i = 0; i < 6; i++) {
        fill(0, 0, 255);
        rect(50, 150 + i * 40, 30, 30);
    }
}

function draw() {
    // No animation needed for this demonstration
}
