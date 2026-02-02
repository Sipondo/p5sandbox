function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    // Nested if: decide which quadrant the mouse is in
    textSize(20);
    fill(0);

    if (mouseX < width / 2) {
        // Left half
        if (mouseY < height / 2) {
            // Top-left
            text('Top-left', 20, 30);
            fill(180, 220, 180);
            rect(50, 60, 120, 120);
        } else {
            // Bottom-left
            text('Bottom-left', 20, 30);
            fill(180, 180, 220);
            rect(50, 200, 120, 120);
        }
    } else {
        // Right half
        if (mouseY < height / 2) {
            // Top-right
            text('Top-right', 20, 30);
            fill(220, 180, 180);
            rect(230, 60, 120, 120);
        } else {
            // Bottom-right
            text('Bottom-right', 20, 30);
            fill(220, 220, 180);
            rect(230, 200, 120, 120);
        }
    }
}
