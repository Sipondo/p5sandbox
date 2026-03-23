let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let temps = [2, 3, 6, 10, 15, 18];

function setup() {
  createCanvas(500, 420);
}

function draw() {
  background(245);

  fill(30);
  textSize(18);
  text("Average temperature (°C)", 20, 30);

  // Chart area
  let leftX = 60;
  let rightX = width - 30;
  let topY = 60;
  let bottomY = 360;
  let maxVal = 20;

  // Grid lines
  stroke(220);
  strokeWeight(0.5);
  for (let v = 0; v <= maxVal; v += 5) {
    let y = map(v, 0, maxVal, bottomY, topY);
    line(leftX, y, rightX, y);

    // Grid label
    noStroke();
    fill(150);
    textSize(10);
    textAlign(RIGHT, CENTER);
    text(v + "°", leftX - 8, y);
    stroke(220);
    strokeWeight(0.5);
  }

  // Draw line connecting all points
  noFill();
  stroke(231, 76, 60);
  strokeWeight(2.5);
  beginShape();
  for (let i = 0; i < temps.length; i++) {
    let x = map(i, 0, temps.length - 1, leftX + 20, rightX - 20);
    let y = map(temps[i], 0, maxVal, bottomY, topY);
    vertex(x, y);
  }
  endShape();

  // Draw points and labels
  for (let i = 0; i < temps.length; i++) {
    let x = map(i, 0, temps.length - 1, leftX + 20, rightX - 20);
    let y = map(temps[i], 0, maxVal, bottomY, topY);

    // Point
    fill(231, 76, 60);
    noStroke();
    circle(x, y, 10);

    // Value
    fill(50);
    textSize(11);
    textAlign(CENTER, BOTTOM);
    text(temps[i] + "°", x, y - 8);

    // Month label
    fill(100);
    textAlign(CENTER, TOP);
    text(months[i], x, bottomY + 8);
  }
}
