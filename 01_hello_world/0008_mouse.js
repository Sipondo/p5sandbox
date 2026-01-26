function setup() {
    createCanvas(400, 400);
}

function draw() {
    clear(); // Grey background each frame. What happens if we don't do this here?
    background(220); // grey background
    circle(mouseX, mouseY, 50); // Draw a circle at the mouse position
    rect(mouseX + 150, mouseY, 50, 50); // Draw a rectangle 150 pixels to the right of the mouse
}
