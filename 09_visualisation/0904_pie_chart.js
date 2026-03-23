let labels = ["Rent", "Food", "Transport", "Fun", "Savings"];
let values = [40, 25, 15, 12, 8];
let colours;

function setup() {
  createCanvas(500, 420);
  angleMode(DEGREES);
  colours = [
    color(231, 76, 60),
    color(52, 152, 219),
    color(46, 204, 113),
    color(241, 196, 15),
    color(155, 89, 182)
  ];
}

function draw() {
  background(245);

  fill("black");
  textSize(18);
  textAlign(LEFT);
  text("Monthly budget breakdown", 20, 30);

  // Calculate total
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }

  // Draw pie
  let cx = 200;
  let cy = 230;
  let diameter = 250;
  let angle = -90; // start from top

  for (let i = 0; i < values.length; i++) {
    let sliceAngle = map(values[i], 0, total, 0, 360);

    // Draw slice
    fill(colours[i]);
    noStroke();
    arc(cx, cy, diameter, diameter, angle, angle + sliceAngle, PIE);

    // Place label along the middle of the slice
    let labelAngle = angle + sliceAngle / 2;
    let labelDist = diameter / 2 + 30;
    let lx = cx + cos(labelAngle) * labelDist;
    let ly = cy + sin(labelAngle) * labelDist;

    fill("black");
    textSize(12);
    textAlign(CENTER, CENTER);
    text(labels[i] + " " + values[i] + "%", lx, ly);

    angle += sliceAngle;
  }

  // Legend
  for (let i = 0; i < labels.length; i++) {
    let lx = 360;
    let ly = 120 + i * 28;
    fill(colours[i]);
    noStroke();
    rect(lx, ly, 14, 14, 3);
    fill("black");
    textSize(12);
    textAlign(LEFT, CENTER);
    text(labels[i], lx + 22, ly + 7);
  }
}
