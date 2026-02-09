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

    // Offset mouse coordinates to account for the translated origin
    let new_mouseX = mouseX - offsetX;
    let new_mouseY = mouseY - offsetY;

    stroke(255, 0, 0);
    circle(new_mouseX, new_mouseY, 20);
}
