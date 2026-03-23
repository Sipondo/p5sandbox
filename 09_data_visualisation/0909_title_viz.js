// Dynamic title page: animated data visualisation collage
let bars = [];
let dots = [];
let angles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Generate random bar data
  for (let i = 0; i < 8; i++) {
    bars.push({ target: random(50, 200), current: 0 });
  }

  // Generate scatter dots
  for (let i = 0; i < 30; i++) {
    dots.push({
      x: random(width * 0.55, width * 0.95),
      y: random(height * 0.1, height * 0.55),
      size: random(6, 18),
      col: color(random(100, 255), random(100, 200), random(150, 255), 180)
    });
  }

  // Generate pie angles
  for (let i = 0; i < 5; i++) {
    angles.push(random(0.5, 2));
  }
}

function draw() {
  background(30, 35, 50);

  // Bar chart area (left side)
  let barX = width * 0.05;
  let barBottom = height * 0.85;
  let barW = width * 0.04;
  let barGap = width * 0.015;

  for (let i = 0; i < bars.length; i++) {
    bars[i].current = lerp(bars[i].current, bars[i].target, 0.02);
    let x = barX + i * (barW + barGap);
    let h = bars[i].current;

    let c = lerpColor(color(52, 152, 219), color(46, 204, 113), i / bars.length);
    fill(c);
    noStroke();
    rect(x, barBottom - h, barW, h, 3, 3, 0, 0);
  }

  // Scatter dots (right side)
  for (let i = 0; i < dots.length; i++) {
    let d = dots[i];
    fill(d.col);
    noStroke();
    circle(d.x, d.y, d.size);
  }

  // Pie chart (bottom right)
  let pieX = width * 0.75;
  let pieY = height * 0.75;
  let pieSize = min(width, height) * 0.25;
  let total = 0;
  for (let i = 0; i < angles.length; i++) total += angles[i];

  let a = -HALF_PI;
  let pieColors = [
    color(231, 76, 60),
    color(241, 196, 15),
    color(46, 204, 113),
    color(52, 152, 219),
    color(155, 89, 182)
  ];
  for (let i = 0; i < angles.length; i++) {
    let sliceAngle = map(angles[i], 0, total, 0, TWO_PI);
    fill(pieColors[i]);
    noStroke();
    arc(pieX, pieY, pieSize, pieSize, a, a + sliceAngle, PIE);
    a += sliceAngle;
  }

  // Title text
  fill(255);
  textSize(min(width, height) * 0.06);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text("Data Visualisation", width / 2, height * 0.45);
  textStyle(NORMAL);
  textSize(min(width, height) * 0.025);
  fill(200);
  text("Lecture 9", width / 2, height * 0.53);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
