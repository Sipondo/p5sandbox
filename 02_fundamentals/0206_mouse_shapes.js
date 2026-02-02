function setup() {
  createCanvas(600, 450);
}

function draw() {
  stroke(0);
  strokeWeight(12);
  
  // Top-left
  fill(255, 255, 255);
  rect(0, 0, width, height);

  // Top-middle
  fill(0,0,255);
  rect(mouseX - 80, 0, 160, mouseY - 60);

  // Middle-left
  fill(255,0,0);
  rect(0, mouseY - 60, mouseX - 80, 120);

  // Middle-right
  fill(240, 200, 0);
  rect(mouseX + 80, mouseY - 60, width - mouseX - 80, 120);

  // Bottom-middle
  fill(240, 200, 0);
  rect(mouseX - 80, mouseY + 60, 160, height - mouseY - 60);
}
