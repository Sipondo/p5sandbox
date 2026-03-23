let labels = [];
let values = [];
let counter = 0;

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(245);

  fill("black");
  textSize(16);
  text("Click to add data, press 'r' to reset", width / 2, 25);

  if (values.length == 0) {
    fill("grey");
    textSize(14);
    text("Click anywhere to start adding bars!", width / 2, height / 2);
    return;
  }

  let startX = 30;
  let bottomY = 370;
  let maxBars = min(values.length, 12);

  // Calculate bar width based on how many bars we have
  let totalWidth = width - 60;
  let spacing = 6;
  let barWidth = (totalWidth - spacing * (maxBars - 1)) / maxBars;
  barWidth = min(barWidth, 60);

  // Find max for scaling
  let maxVal = 1;
  for (let i = 0; i < maxBars; i++) {
    if (values[i] > maxVal) maxVal = values[i];
  }

  for (let i = 0; i < maxBars; i++) {
    let x = startX + i * (barWidth + spacing);
    let barHeight = map(values[i], 0, maxVal, 0, 300);

    fill(52, 152, 219);
    rect(x, bottomY - barHeight, barWidth, barHeight, 3, 3, 0, 0);

    // Label
    fill("black");
    textSize(max(9, 12 - maxBars * 0.3));
    text(labels[i], x + barWidth / 2, bottomY + 14);
  }

  // Baseline
  stroke(180);
  strokeWeight(1);
  line(20, bottomY, width - 10, bottomY);

  // Count
  noStroke();
  fill("grey");
  textSize(11);
  text(values.length + " data points", width / 2, height - 8);
}

function mousePressed() {
  counter++;
  labels.push("#" + counter);
  values.push(round(random(10, 100)));
}

function keyPressed() {
  if (key == "r" || key == "R") {
    labels = [];
    values = [];
    counter = 0;
  }
}
