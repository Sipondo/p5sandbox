let labels = ["Python", "JavaScript", "Java", "C++", "Go", "Rust"];
let values = [35, 30, 20, 15, 12, 10];

function setup() {
  createCanvas(500, 420);
}

function draw() {
  background(245);

  fill(30);
  textSize(18);
  text("Favourite programming languages", 20, 30);

  let startX = 40;
  let bottomY = 370;
  let barWidth = 55;
  let spacing = 18;
  let scale = 4;

  for (let i = 0; i < values.length; i++) {
    let x = startX + i * (barWidth + spacing);
    let barHeight = values[i] * scale;
    let barTop = bottomY - barHeight;

    // Check if mouse is inside this bar
    let isHovered = mouseX > x && mouseX < x + barWidth &&
                    mouseY > barTop && mouseY < bottomY;

    // Highlight on hover
    noStroke();
    if (isHovered) {
      fill(231, 76, 60);

      // Show value tooltip
      fill(50);
      textSize(14);
      textAlign(CENTER);
      text(values[i] + " votes", x + barWidth / 2, barTop - 10);

      fill(231, 76, 60);
    } else {
      fill(52, 152, 219);
    }

    rect(x, barTop, barWidth, barHeight, 4, 4, 0, 0);

    // Label
    fill(100);
    textSize(11);
    textAlign(CENTER, TOP);
    text(labels[i], x + barWidth / 2, bottomY + 6);
  }

  // Baseline
  stroke(180);
  strokeWeight(1);
  line(30, bottomY, width - 10, bottomY);

  // Hint
  noStroke();
  fill(180);
  textSize(11);
  textAlign(LEFT, BOTTOM);
  text("Hover over a bar to see the value", 20, height - 8);
}
