let data;
let landValues = [];
let times = [];

function setup() {
  createCanvas(700, 400);
  textFont("sans-serif");
  data = loadJSON("https://global-warming.org/api/temperature-api");
}

function draw() {
  background(245);

  if (!data) return;

  // Parse data once
  if (landValues.length === 0) {
    if (!data.hasOwnProperty("result")) return;

    for (let row of data.result) {
      let time = Number(row.time);
      let land = Number(row.land);

      if (!isNaN(time) && !isNaN(land)) {
        times.push(time);
        landValues.push(land);
      }
    }
  }

  // Chart layout
  let margin = 60;
  let left = margin;
  let right = width - margin;
  let top = margin;
  let bottom = height - margin;

  // Find global min/max for scaling
  let maxVal = max(landValues);
  let minVal = min(landValues);
  let absMax = max(abs(maxVal), abs(minVal)); // symmetrical around 0

  // Axes
  stroke(0);
  strokeWeight(1);
  line(left, top, left, bottom); // y-axis
  line(left, (top + bottom) / 2, right, (top + bottom) / 2); // 0 line in center

  // Draw land temperature line (red)
  noFill();
  stroke(200, 0, 0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < landValues.length; i++) {
    let x = map(times[i], times[0], times[times.length - 1], left, right);
    // Map 0 to vertical center
    let y = map(landValues[i], -absMax, absMax, bottom, top);
    vertex(x, y);
  }
  endShape();

  // Y-axis labels
  noStroke();
  fill(0);
  textSize(12);
  textAlign(RIGHT, CENTER);
  text(`+${absMax.toFixed(2)}`, left - 10, top);
  text(`0.00`, left - 10, (top + bottom) / 2);
  text(`-${absMax.toFixed(2)}`, left - 10, bottom);

  // X-axis labels (every ~10 years)
  textAlign(CENTER, TOP);
  let step = floor(times.length / 6);
  for (let i = 0; i < times.length; i += step) {
    let x = map(times[i], times[0], times[times.length - 1], left, right);
    text(times[i].toFixed(0), x, bottom + 5);
  }

  // Axis titles
  textSize(14);
  textAlign(CENTER);
  text("Year", (left + right) / 2, bottom + 40);

  push();
  translate(left - 50, (top + bottom) / 2);
  rotate(-PI / 2);
  text("Land Temperature Anomaly (°C)", 0, 0);
  pop();

  // Top-right latest value
  textAlign(RIGHT, TOP);
  fill(0);
  let latestIndex = landValues.length - 1;
  let latestLand = landValues[latestIndex].toFixed(2);
  let latestTime = times[latestIndex].toFixed(2);

  text(`Latest Reading: ${latestLand} °C`, right, top - 15);
  text(`Year: ${latestTime}`, right, top + 5);

  // Chart title
  textAlign(LEFT, TOP);
  textSize(16);
  text("Global Temperature Anomaly (red line)", left, top - 40);
}
