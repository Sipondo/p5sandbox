let labels = ["A", "B", "C", "D", "E", "F"];
let targetValues = [60, 85, 45, 70, 55, 90];
let currentValues = [0, 0, 0, 0, 0, 0];

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(245);

  fill("black");
  textSize(18);
  text("Animated bar chart (click to reset)", width / 2, 30);

  let startX = 40;
  let bottomY = 370;
  let barWidth = 55;
  let spacing = 20;
  let scale = 3.5;

  for (let i = 0; i < targetValues.length; i++) {
    // Smoothly animate toward target
    currentValues[i] = lerp(currentValues[i], targetValues[i], 0.03);

    let x = startX + i * (barWidth + spacing);
    let barHeight = currentValues[i] * scale;

    // Bar
    fill(46, 204, 113);
    rect(x, bottomY - barHeight, barWidth, barHeight, 4, 4, 0, 0);

    // Value
    fill("black");
    textSize(12);
    text(round(currentValues[i]), x + barWidth / 2, bottomY - barHeight - 8);

    // Label
    text(labels[i], x + barWidth / 2, bottomY + 18);
  }

  // Baseline
  stroke(180);
  strokeWeight(1);
  line(30, bottomY, width - 10, bottomY);
}

function mousePressed() {
  // Reset all bars to zero
  for (let i = 0; i < currentValues.length; i++) {
    currentValues[i] = 0;
  }
}
