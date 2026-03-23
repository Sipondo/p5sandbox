let categories = ["Bike", "Bus", "Train", "Car", "Walk"];
let values = [35, 20, 15, 10, 20];
let colors;

function setup() {
  createCanvas(500, 420);
  colors = [
    color(46, 204, 113),
    color(52, 152, 219),
    color(155, 89, 182),
    color(231, 76, 60),
    color(241, 196, 15),
  ];
  textAlign(LEFT, CENTER);
  noLoop();
}

function draw() {
  background(245);

  // Title
  fill(30);
  textSize(18);
  textStyle(BOLD);
  text("How do students get to campus?", 20, 30);
  textStyle(NORMAL);
  textSize(12);
  fill(120);
  text("Each icon = 5 students (out of 100 surveyed)", 20, 52);

  let startY = 80;
  let rowHeight = 60;
  let iconSize = 18;
  let iconSpacing = 24;

  for (let i = 0; i < categories.length; i++) {
    let y = startY + i * rowHeight;

    // Category label
    fill(50);
    textSize(14);
    textAlign(RIGHT, CENTER);
    text(categories[i], 70, y + iconSize / 2);

    // Draw icons (each icon = 5 students)
    let iconCount = values[i] / 5;
    for (let j = 0; j < iconCount; j++) {
      let x = 90 + j * iconSpacing;
      fill(colors[i]);
      noStroke();
      // Simple person icon: head + body
      circle(x + iconSize / 2, y, iconSize * 0.4);
      // Body
      rect(x + iconSize / 2 - 3, y + iconSize * 0.25, 6, iconSize * 0.45, 2);
    }

    // Percentage label
    fill(80);
    textAlign(LEFT, CENTER);
    textSize(13);
    text(values[i] + "%", 90 + (values[i] / 5) * iconSpacing + 8, y + iconSize / 2 - 4);
  }

  // Legend at bottom
  fill(150);
  textSize(11);
  textAlign(LEFT);
  text("Source: fictional campus survey, Spring 2026", 20, height - 20);
}
