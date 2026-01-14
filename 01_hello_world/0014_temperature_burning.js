let data;
let landValues = [];
let times = [];
let particles = [];

function setup() {
  createCanvas(700, 400);
  textFont("sans-serif");
  data = loadJSON("https://global-warming.org/api/temperature-api");
}

function draw() {
  background(20); // dark background to make fire glow

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

  let margin = 60;
  let left = margin;
  let right = width - margin;
  let top = margin;
  let bottom = height - margin;

  let maxVal = max(landValues);
  let minVal = min(landValues);
  let absMax = max(abs(maxVal), abs(minVal));

  // Axes
  stroke(255);
  strokeWeight(1);
  line(left, top, left, bottom); 
  line(left, (top + bottom) / 2, right, (top + bottom) / 2);

  // Draw burning temperature line
  noFill();
  stroke(255, 100, 0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < landValues.length; i++) {
    let x = map(times[i], times[0], times[times.length - 1], left, right);
    let y = map(landValues[i], -absMax, absMax, bottom, top);
    vertex(x, y);

    // Spawn fewer particles, weighted by temperature
    let intensity = map(landValues[i], 0, absMax, 0, 1); // hotter = more sparks
    if (random() < 0.001 + 0.03 * intensity) { // spawn chance per frame
      particles.push(new Particle(x, y, intensity));
    }
  }
  endShape();

  // Update and show particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }

  // Labels and titles
  noStroke();
  fill(255);
  textSize(12);
  textAlign(RIGHT, CENTER);
  text(`+${absMax.toFixed(2)}`, left - 10, top);
  text(`0.00`, left - 10, (top + bottom) / 2);
  text(`-${absMax.toFixed(2)}`, left - 10, bottom);

  textAlign(CENTER, TOP);
  let step = floor(times.length / 6);
  for (let i = 0; i < times.length; i += step) {
    let x = map(times[i], times[0], times[times.length - 1], left, right);
    text(times[i].toFixed(0), x, bottom + 5);
  }

  textSize(14);
  textAlign(CENTER);
  text("Year", (left + right) / 2, bottom + 40);
  push();
  translate(left - 50, (top + bottom) / 2);
  rotate(-PI / 2);
  text("Land Temperature Anomaly (°C)", 0, 0);
  pop();

  textAlign(RIGHT, TOP);
  let latestIndex = landValues.length - 1;
  let latestLand = landValues[latestIndex].toFixed(2);
  let latestTime = times[latestIndex].toFixed(2);
  text(`Latest Reading: ${latestLand} °C`, right, top - 15);
  text(`Year: ${latestTime}`, right, top + 5);

  textAlign(LEFT, TOP);
  textSize(16);
  text("Global Temperature Anomaly (burning line)", left, top - 40);
}

// Optimized Particle class
class Particle {
  constructor(x, y, intensity) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-0.3, 0.3), random(-1.5, -0.3)); // slower upward
    this.lifetime = 20 + 20 * intensity; // live shorter
    this.alpha = 235;
    this.size = random(2, 8) + intensity;
    this.color = color(255, random(100, 200), 0, this.alpha);
  }

  update() {
    this.pos.add(this.vel);
    this.alpha -= 255 / this.lifetime;
    this.color.setAlpha(this.alpha);
  }

  finished() {
    return this.alpha <= 0;
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
