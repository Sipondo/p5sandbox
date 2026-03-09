let sparks = [];

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(18, 22, 28, 55);

  if (frameCount % 3 === 0) {
    sparks.push(makeSpark(width * 0.5, height * 0.55));
  }

  // Remove dead particles safely with a reverse for loop.
  for (let i = sparks.length - 1; i >= 0; i--) {
    let s = sparks[i];

    s.x += s.vx;
    s.y += s.vy;
    s.vy += 0.03;
    s.life -= 1.8;

    noStroke();
    fill(s.r, s.g, s.b, s.life);
    circle(s.x, s.y, s.size);

    if (s.life <= 0) {
      sparks.splice(i, 1);
    }
  }

  fill(235);
  textSize(16);
  text('reverse for removal: delete while iterating without skipping', 20, 28);
  textSize(13);
  text('active sparks: ' + sparks.length + ' | click to burst', 20, 48);
}

function mousePressed() {
  for (let i = 0; i < 40; i++) {
    sparks.push(makeSpark(mouseX, mouseY));
  }
}

function makeSpark(x, y) {
  return {
    x: x,
    y: y,
    vx: random(-2.6, 2.6),
    vy: random(-4.8, -1.3),
    size: random(3, 8),
    life: random(120, 255),
    r: random(220, 255),
    g: random(120, 220),
    b: random(80, 150)
  };
}
