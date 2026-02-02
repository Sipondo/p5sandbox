function setup() {
  createCanvas(400, 300);
  textSize(48);
}

function draw() {
  background(220);

  fill(100, 200, 255); // rect colour
  // x is 25 pixels to the right of the mouse
  // y is centered vertically
  // we use the 25 to center the rectangle due to its 50 pixel width and height
  rect(mouseX + 50 - 25, height / 2 - 25, 50, 50);

  // Math with strings: + concatenates
  fill(0);
  text("x: " + mouseX + " offset: " + (mouseX + 50), 20, 40);
  text("y: " + mouseY, 20, 100);
  text("divided: " + (mouseX / 2), 20, 220);
  text("frameCount: " + frameCount, 20, 280);
}
