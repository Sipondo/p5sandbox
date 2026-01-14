function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {
    // Background is not refreshed, so circles accumulate
}

function mousePressed() {
    // Draw a circle when mouse is pressed
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 40, 40);
}
