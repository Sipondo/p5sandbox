let symmetry = 12;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}


function draw() {
    // Thicker lines for the mandala strokes.
    strokeWeight(5);

    // Draw around the center of the canvas.
    let offsetX = width / 2;
    let offsetY = height / 2;
    translate(offsetX, offsetY);

    // Convert mouse position to the centered coordinate system.
    let lineStartX = mouseX - offsetX;
    let lineStartY = mouseY - offsetY;
    let lineEndX = pmouseX - offsetX;
    let lineEndY = pmouseY - offsetY;

    // Repeat the stroke around the circle.
    for (let i = 0; i < symmetry; i++) {
      line(lineStartX, lineStartY, lineEndX, lineEndY);
      rotate(360 / symmetry);
    }
}
