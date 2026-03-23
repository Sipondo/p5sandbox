let goals = [
  { label: "Steps", current: 7200, target: 10000, unit: "" },
  { label: "Water", current: 1.8, target: 2.5, unit: "L" },
  { label: "Sleep", current: 6.5, target: 8, unit: "h" },
  { label: "Focus", current: 180, target: 240, unit: "min" },
];

let animProgress = 0;
let colors;

function setup() {
  createCanvas(500, 420);
  colors = [
    color(46, 204, 113),
    color(52, 152, 219),
    color(155, 89, 182),
    color(241, 196, 15),
  ];
}

function draw() {
  background(245);

  // Title
  fill(30);
  textSize(18);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text("Daily wellness tracker", 20, 20);
  textStyle(NORMAL);
  textSize(12);
  fill(120);
  text("Monday, March 23", 20, 44);

  // Animate in
  animProgress = lerp(animProgress, 1, 0.02);

  let gaugeSize = 90;
  let spacing = 110;
  let startX = 55;
  let centerY = 160;

  // Draw circular gauges
  for (let i = 0; i < goals.length; i++) {
    let cx = startX + i * spacing;
    let goal = goals[i];
    let pct = min(goal.current / goal.target, 1.0);
    let animPct = pct * animProgress;

    // Background arc
    noFill();
    strokeWeight(10);
    stroke(220);
    arc(cx, centerY, gaugeSize, gaugeSize, -HALF_PI, -HALF_PI + TWO_PI);

    // Progress arc
    stroke(colors[i]);
    strokeCap(ROUND);
    let endAngle = -HALF_PI + TWO_PI * animPct;
    if (animPct > 0.001) {
      arc(cx, centerY, gaugeSize, gaugeSize, -HALF_PI, endAngle);
    }

    // Center text
    noStroke();
    fill(30);
    textAlign(CENTER, CENTER);
    textSize(16);
    textStyle(BOLD);
    text(round(pct * 100) + "%", cx, centerY - 6);
    textStyle(NORMAL);
    textSize(10);
    fill(120);
    text(goal.label, cx, centerY + 12);
  }

  // Detail bars below
  let barY = 250;
  let barHeight = 20;
  let barSpacing = 40;

  for (let i = 0; i < goals.length; i++) {
    let y = barY + i * barSpacing;
    let goal = goals[i];
    let pct = min(goal.current / goal.target, 1.0);
    let animPct = pct * animProgress;

    // Label
    fill(50);
    textAlign(LEFT, CENTER);
    textSize(12);
    text(goal.label, 20, y + barHeight / 2);

    // Bar background
    let barX = 80;
    let barW = 300;
    noStroke();
    fill(220);
    rect(barX, y, barW, barHeight, 10);

    // Bar fill
    fill(colors[i]);
    rect(barX, y, barW * animPct, barHeight, 10);

    // Value text
    fill(80);
    textAlign(LEFT, CENTER);
    textSize(11);
    text(goal.current + goal.unit + " / " + goal.target + goal.unit, barX + barW + 10, y + barHeight / 2);
  }

  // Click to reset
  fill(180);
  textAlign(LEFT, BOTTOM);
  textSize(11);
  text("Click to replay animation", 20, height - 10);
}

function mousePressed() {
  animProgress = 0;
}
