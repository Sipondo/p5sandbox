let circles = [];
let guardCount = 0;

function setup() {
  createCanvas(700, 400);
  noStroke();

  let guard = 0;

  // Spawn circles with while until we have enough valid candidates.
  while (circles.length < 24 && guard < 6000) {
    guard++;

    let candidate = {
      x: random(40, width - 40),
      y: random(80, height - 40),
      r: random(10, 22),
      hue: random(170, 280)
    };

    if (!overlapsExisting(candidate)) {
      circles.push(candidate);
    }
  }

  guardCount = guard;
}

function draw() {
  background(247);
  colorMode(HSL, 360, 100, 100);

  circles.forEach(c => {
    fill(c.hue, 75, 55, 0.85);
    circle(c.x, c.y, c.r * 2);
  });

  colorMode(RGB, 255);
  fill(20);
  textSize(16);
  text('while spawn: keep trying until we have enough valid circles', 20, 28);
  textSize(13);
  text('circles: ' + circles.length + ' | while iterations: ' + guardCount, 20, 48);
}

function overlapsExisting(candidate) {
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    let d = dist(candidate.x, candidate.y, c.x, c.y);

    if (d < candidate.r + c.r + 4) {
      return true;
    }
  }

  return false;
}
