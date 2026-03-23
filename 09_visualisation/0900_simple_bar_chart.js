let labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
let values = [3.0, 5.5, 4.0, 7.0, 5.0];

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER); // Centre text instead of left-aligning
  noStroke();
}

function draw() {
  background(245);

  // Chart title
  fill("black");
  textSize(18);
  text("Average cups of coffee per day", width / 2, 30);

  // Layout
  let startX = 50;
  let bottomY = 370;
  let barWidth = 60;
  let spacing = 25;
  let scale = 40; // pixels per unit

  for (let i = 0; i < values.length; i++) {
    let x = startX + i * (barWidth + spacing);
    let barHeight = values[i] * scale;

    // Draw bar
    fill(52, 152, 219);
    rect(x, bottomY - barHeight, barWidth, barHeight, 4, 4, 0, 0);

    // Draw value on top of bar
    fill("black");
    textSize(14);
    text(values[i], x + barWidth / 2, bottomY - barHeight - 8);
    // Draw label below bar
    text(labels[i], x + barWidth / 2, bottomY + 20);
  }

  // Draw line at bottom of chart
  stroke(180);
  strokeWeight(1);
  line(40, bottomY, width - 20, bottomY);
}
