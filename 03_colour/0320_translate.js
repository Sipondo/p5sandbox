function setup() {
    createCanvas(400, 400);
    background(230);

    // Move the origin to the center, then draw relative to (0, 0).
    translate(width / 2, height / 2);

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
