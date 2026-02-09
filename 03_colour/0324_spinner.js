function setup() {
    createCanvas(400, 400);
    // Use degrees so rotate() accepts 0-360 style angles.
    angleMode(DEGREES);
}

function draw() {
    // Clear each frame to animate.
    background(230);

    // Spin around the canvas center.
    translate(width / 2, height / 2);
    rotate(frameCount);

    // Spinner arm.
    stroke(0);
    strokeWeight(4);
    rect(0, 0, 90, 0);

    // End cap.
    noStroke();
    fill(0);
    ellipse(90, 0, 16, 16);
}
