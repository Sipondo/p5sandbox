let offsetX;
let offsetY;

function setup() {
    createCanvas(400, 400);
    offsetX = width / 2;
    offsetY = height / 2;
    background(230);

    // Move the origin to the center, then draw relative to (0, 0).
    translate(offsetX, offsetY);

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

function draw() {
    // Move the origin to the center, then draw relative to (0, 0).
    translate(offsetX, offsetY);

    // This will not work as expected because the origin has been translated in setup()
    stroke(255, 0, 0);
    circle(mouseX, mouseY, 20);
}
