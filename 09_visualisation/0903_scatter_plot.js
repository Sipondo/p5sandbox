// Study hours vs. exam score
let hours = [2, 3, 5, 4, 7, 6, 8, 1, 9, 5];
let scores = [45, 55, 70, 60, 85, 75, 90, 35, 95, 65];
let names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER);
}

function draw() {
  background(245);

  fill("black");
  textSize(25);
  text("Study hours vs. exam score", width / 2, 30);

  // Chart area
  let leftX = 60;
  let rightX = width - 30;
  let topY = 60;
  let bottomY = 370;

  // Axes
  stroke(180);
  strokeWeight(1);
  line(leftX, bottomY, rightX, bottomY); // x axis
  line(leftX, topY, leftX, bottomY);     // y axis

  // Axis labels
  noStroke();
  fill("black");
  text("Hours studied", (leftX + rightX) / 2, bottomY + 20);

  push();
  translate(35, (topY + bottomY) / 2);
  rotate(-HALF_PI);
  text("Exam score", 0, 0);
  pop();

  // Draw each data point
  for (let i = 0; i < hours.length; i++) {
    let x = map(hours[i], 0, 10, leftX + 10, rightX - 10);
    let y = map(scores[i], 0, 100, bottomY, topY);

    // Check hover
    let isHovered = dist(mouseX, mouseY, x, y) < 12;

    // Draw point
    noStroke();
    if (isHovered) {
      fill("red");
      circle(x, y, 20);

      // Show tooltip
      fill("black");
      text("Student " + names[i] + ": " + hours[i] + "h → " + scores[i] + "%", x + 14, y - 14);
    } else {
      fill("blue");
      circle(x, y, 14);
    }
  }
}
