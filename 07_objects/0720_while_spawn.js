let circles = [];

function createCircle() {
  return {
    x: random(width),
    y: random(height),
    size: random(20, 60),
    r: random(80, 255),
    g: random(80, 255),
    b: random(80, 255)
  };
}

function setup() {
  createCanvas(700, 400);
  noStroke();

  // Make 20 random circles using circles.length as the condition.
  while (circles.length < 20) {
    circles.push(createCircle());
  }
}

function draw() {
  background(245);

  // Draw circles with another while loop.
  let i = 0;
  while (i < circles.length) {
    let c = circles[i];
    fill(c.r, c.g, c.b, 180);
    circle(c.x, c.y, c.size);
    i++;
  }

  fill(20);
  textSize(16);
  text('Simple while loop example (no forEach)', 20, 30);
}
