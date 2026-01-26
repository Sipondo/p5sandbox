function setup() {
  createCanvas(800, 800);
  textSize(30);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  
  // Draw grid lines every 100px
  strokeWeight(10);
  
  noStroke();
  text(0, 5, 15);
  
  for (let x = 100; x < width; x += 100) {
    stroke(130);
    line(x, 65, x, height);
    fill(0);
    noStroke();
    text(x, x - 25, 15);
  }
  
  for (let y = 100; y < height; y += 100) {
    stroke(130);
    line(65, y, width, y);
    fill(0);
    noStroke();
    text(y, 5, y);
  }
  
  fill(255, 0, 0);
  noStroke();
  circle(mouseX, mouseY, 10);
  
  // Display coordinates
  strokeWeight(10);
  stroke(255);
  fill(0);
  textAlign(LEFT);
  text(`x: ${Math.round(mouseX)}, y: ${Math.round(mouseY)}`, mouseX + 15, mouseY);
}
