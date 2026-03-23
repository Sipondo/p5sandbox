// Assignment base: a starter sketch for building your own chart
// Replace the data and modify the drawing code!

let labels = ["A", "B", "C", "D", "E", "F"];
let values = [30, 55, 40, 70, 50, 65];

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(245);

  // Title - change this!
  fill("black");
  textSize(18);
  text("My Chart Title", width / 2, 30);

  let startX = 40;
  let bottomY = 370;
  let barWidth = 55;
  let spacing = 20;

  // Find the maximum value for scaling
  let maxVal = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > maxVal) maxVal = values[i];
  }

  for (let i = 0; i < values.length; i++) {
    let x = startX + i * (barWidth + spacing);
    let barHeight = map(values[i], 0, maxVal, 0, 300);

    // Draw bar - try changing the colour or shape!
    fill(52, 152, 219);
    rect(x, bottomY - barHeight, barWidth, barHeight, 4, 4, 0, 0);

    // Value above
    fill("black");
    textSize(12);
    text(values[i], x + barWidth / 2, bottomY - barHeight - 8);

    // Label below
    text(labels[i], x + barWidth / 2, bottomY + 18);
  }

  // Baseline
  stroke(180);
  strokeWeight(1);
  line(30, bottomY, width - 10, bottomY);
}
