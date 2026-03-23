let labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
let values = [30, 55, 40, 70, 50];

function setup() {
  createCanvas(500, 420);
}

function draw() {
  background(245);

  // Chart title
  fill(30);
  textSize(18);
  text("Weekly steps (thousands)", 20, 30);

  // Layout
  let startX = 50;
  let bottomY = 370;
  let barWidth = 60;
  let spacing = 25;
  let scale = 4; // pixels per unit

  for (let i = 0; i < values.length; i++) {
    let x = startX + i * (barWidth + spacing);
    let barHeight = values[i] * scale;

    // Draw bar
    fill(52, 152, 219);
    noStroke();
    rect(x, bottomY - barHeight, barWidth, barHeight, 4, 4, 0, 0);

    // Draw value on top of bar
    fill(50);
    textSize(14);
    textAlign(CENTER);
    text(values[i], x + barWidth / 2, bottomY - barHeight - 8);

    // Draw label below bar
    fill(100);
    textSize(13);
    text(labels[i], x + barWidth / 2, bottomY + 20);
  }

  // Draw baseline
  stroke(180);
  strokeWeight(1);
  line(40, bottomY, width - 20, bottomY);
}
