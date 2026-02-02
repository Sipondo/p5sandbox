let xPositions = [50, 150, 250, 350];

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220);
    
    // Draw circles at positions stored in array
    fill(255, 0, 0);
    for (let i = 0; i < xPositions.length; i++) {
        ellipse(xPositions[i], 200, 60, 60);
        
        // Move each circle
        xPositions[i] += 1;
        
        // Wrap around if off screen
        if (xPositions[i] > width) {
            xPositions[i] = 0;
        }
    }
}
