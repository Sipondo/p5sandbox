let labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let values = [25, 55, 40, 70, 60, 85, 35];

function setup() {
  createCanvas(500, 420);
}

function draw() {
  background(245);

  fill(30);
  textSize(18);
  text("Daily screen time (minutes)", 20, 30);

  let startX = 30;
  let bottomY = 370;
  let barWidth = 50;
  let spacing = 15;
  let scale = 3.5;

  for (let i = 0; i < values.length; i++) {
    let x = startX + i * (barWidth + spacing);
    let barHeight = values[i] * scale;

    // Map value to color: low = blue, high = red
    let r = map(values[i], 25, 85, 60, 231);
    let g = map(values[i], 25, 85, 150, 76);
    let b = map(values[i], 25, 85, 220, 60);

    fill(r, g, b);
    noStroke();
    rect(x, bottomY - barHeight, barWidth, barHeight, 4, 4, 0, 0);

    // Value label
    fill(50);
    textSize(12);
    textAlign(CENTER);
    text(values[i], x + barWidth / 2, bottomY - barHeight - 8);

    // Day label
    fill(100);
    textSize(11);
    text(labels[i], x + barWidth / 2, bottomY + 18);
  }

  stroke(180);
  strokeWeight(1);
  line(20, bottomY, width - 10, bottomY);
}
