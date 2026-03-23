let labels = ["Python", "JavaScript", "Java", "C++", "Go", "Rust"];
let values = [35, 30, 20, 15, 12, 10];

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(245);

  fill("black");
  textSize(18);
  text("Favourite programming languages", width / 2, 30);

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
    if (isHovered) {
      fill("red");
      rect(x, barTop, barWidth, barHeight, 4, 4, 0, 0);

      // Show value tooltip
      fill("black");
      textSize(14);
      text(values[i] + " votes", x + barWidth / 2, barTop - 10);
    } else {
      fill(52, 152, 219);
      rect(x, barTop, barWidth, barHeight, 4, 4, 0, 0);
    }

    // Label
    fill("black");
    textSize(11);
    text(labels[i], x + barWidth / 2, bottomY + 16);
  }

  // Baseline
  stroke(180);
  strokeWeight(1);
  line(30, bottomY, width - 10, bottomY);

  // Hint
  noStroke();
  fill("grey");
  textSize(11);
  text("Hover over a bar to see the value", width / 2, height - 8);
}
