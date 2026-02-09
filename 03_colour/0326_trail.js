function setup() {
    createCanvas(400, 400);
    background(230);
    stroke(0);
    strokeWeight(2);
}

function draw() {
    // Draw a trail between the previous and current mouse positions.
    line(pmouseX, pmouseY, mouseX, mouseY);
}
