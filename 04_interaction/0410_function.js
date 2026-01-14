function setup() {
    createCanvas(400, 400);
    background(220);
    
    // Call our custom function multiple times
    drawStar(100, 100, 40);
    drawStar(300, 100, 50);
    drawStar(200, 300, 60);
}

function draw() {
    // Static drawing
}

// Custom function to draw a star
function drawStar(x, y, size) {
    push();
    translate(x, y);
    fill(255, 200, 0);
    stroke(0);
    strokeWeight(2);
    
    beginShape();
    for (let i = 0; i < 5; i++) {
        let angle = TWO_PI * i / 5 - HALF_PI;
        let sx = cos(angle) * size;
        let sy = sin(angle) * size;
        vertex(sx, sy);
        angle = TWO_PI * (i + 0.5) / 5 - HALF_PI;
        sx = cos(angle) * size * 0.5;
        sy = sin(angle) * size * 0.5;
        vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
}
