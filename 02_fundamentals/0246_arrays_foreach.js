let xPositions = [50, 150, 250, 350];

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(220);
    fill(255, 0, 0);
    
    // Draw circles at positions stored in array
    xPositions.forEach(function(x, i) {
        ellipse(x, 200, 60, 60);
        
        // Move each circle
        xPositions[i] += 1;
        
        // Wrap around if off screen
        if (xPositions[i] > width) {
            xPositions[i] = 0;
        }
    });
}
