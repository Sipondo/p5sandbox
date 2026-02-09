function setup() {
    createCanvas(400, 400);
    // Use degrees so rotate() accepts 0-360 style angles.
    angleMode(DEGREES);
}

function draw() {
    background(230);
    stroke(0);
    strokeWeight(2);
    fill(0);

    // Move the origin
    translate(width / 2, height / 2);

    // Have the starting rotation change each frame to animate.
    rotate(frameCount);

    
    // Draw a line and circle, then rotate and repeat to create a pattern.
    let steps = 8;
    for (let i = 0; i < steps; i += 1) {
        rotate(360 / steps);
        line(0, 0, 120, 0);
        ellipse(120, 0, 12, 12);
    }
}
