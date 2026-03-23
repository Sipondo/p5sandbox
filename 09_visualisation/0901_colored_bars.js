let labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let values = [25, 55, 40, 70, 60, 85, 35];

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER); // Centre text instead of left-aligning
  noStroke();
}

function draw() {
  background(245);

  fill("black");
  textSize(18);
  text("Daily screen time (minutes)", width / 2, 30);

  let startX = 30;
  let bottomY = 370;
  let barWidth = 50;
  let spacing = 15;
  let scale = 3.5;

  for (let i = 0; i < values.length; i++) {
    let x = startX + i * (barWidth + spacing);
    let barHeight = values[i] * scale;

    // Map value to colour: low = blue, high = red
    let r = map(values[i], 25, 85, 60, 231);
    let g = map(values[i], 25, 85, 150, 76);
    let b = map(values[i], 25, 85, 220, 60);

    fill(r, g, b);
    rect(x, bottomY - barHeight, barWidth, barHeight, 4, 4, 0, 0);

    // Value label
    fill("black");
    textSize(12);
    text(values[i], x + barWidth / 2, bottomY - barHeight - 8);
    // Day label
    text(labels[i], x + barWidth / 2, bottomY + 18);
  }

  stroke(180);
  strokeWeight(1);
  line(20, bottomY, width - 10, bottomY);
}
