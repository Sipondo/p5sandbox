let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let temps = [2, 3, 6, 10, 15, 18];

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(245);

  fill("black");
  textSize(18);
  text("Average temperature (°C)", width / 2, 30);

  // Layout
  let startX = 60;
  let bottomY = 370;
  let spacing = 75;
  let scale = 15; // pixels per degree

  // Draw lines between consecutive points
  stroke(231, 76, 60);
  strokeWeight(2.5);
  for (let i = 0; i < temps.length - 1; i++) {
    let x1 = startX + i * spacing;
    let y1 = bottomY - temps[i] * scale;
    let x2 = startX + (i + 1) * spacing;
    let y2 = bottomY - temps[i + 1] * scale;
    line(x1, y1, x2, y2);
  }

  // Draw points and labels
  noStroke();
  for (let i = 0; i < temps.length; i++) {
    let x = startX + i * spacing;
    let y = bottomY - temps[i] * scale;

    // Point
    fill(231, 76, 60);
    circle(x, y, 10);

    // Value above point
    fill("black");
    textSize(12);
    text(temps[i] + "°", x, y - 12);

    // Month label below
    text(months[i], x, bottomY + 20);
  }

  // Baseline
  stroke(180);
  strokeWeight(1);
  line(40, bottomY, width - 20, bottomY);
}
