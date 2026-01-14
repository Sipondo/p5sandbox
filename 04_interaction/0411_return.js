function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    // Draw circles in a grid
    for (let x = 50; x < width; x += 50) {
        for (let y = 50; y < height; y += 50) {
            // Calculate distance from mouse to circle
            let d = calculateDistance(mouseX, mouseY, x, y);
            
            // Color based on distance
            let colorValue = map(d, 0, 300, 255, 0);
            fill(colorValue, 0, 255 - colorValue);
            
            ellipse(x, y, 30, 30);
        }
    }
}

// Function that returns the distance between two points
function calculateDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return sqrt(dx * dx + dy * dy);
}
