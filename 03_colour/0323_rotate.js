function setup() {
    createCanvas(400, 400);
    background(230);

    // Set the angle mode to use DEGREES
    angleMode(DEGREES);

    // Move the origin to the center, then rotate the coordinate system.
    translate(width / 2, height / 2);
    rotate(30);
    
    // Crosshair
    stroke(0);
    strokeWeight(3);
    line(-12, 0, 12, 0);
    line(0, -12, 0, 12);

    // Label
    noStroke();
    fill(0);
    textSize(14);
    text("(0, 0)", 8, -8);
}
