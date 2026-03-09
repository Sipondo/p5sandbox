let particles = [];

function setup() {
  createCanvas(700, 400);

  for (let i = 0; i < 18; i++) {
    particles.push(makeParticle(random(width), random(height)));
  }
}

function draw() {
  background(242, 50);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < p.r || p.x > width - p.r) p.vx *= -1;
    if (p.y < p.r || p.y > height - p.r) p.vy *= -1;

    fill(p.red, p.green, p.blue, p.alpha);
    noStroke();
    circle(p.x, p.y, p.r * 2);
  });

  particles.shift() // Remove the first particle in the array (the oldest one) to keep the total number of particles manageable.

  fill(20);
  textSize(16);
  text('One particle is removed per update', 20, 28);
  textSize(13);
  text('particles: ' + particles.length + ' | mouse: add 100', 20, 48);
}

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    particles.push(makeParticle(mouseX + random(-15, 15), mouseY + random(-15, 15)));
  }
}

function makeParticle(x, y) {
  return {
    x: constrain(x, 10, width - 10),
    y: constrain(y, 10, height - 10),
    vx: random(-2.2, 2.2),
    vy: random(-2.2, 2.2),
    r: random(8, 18),
    red: random(80, 255),
    green: random(80, 220),
    blue: random(120, 255),
    alpha: random(120, 230),
  };
}
