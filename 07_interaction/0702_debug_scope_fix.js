let goodX = 120;

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(245);

  let localX = 420;

  fill(20);
  textSize(17);
  text('Scope demo: local vs global variables', 20, 35);
  textSize(14);
  text('goodX is global (usable in draw every frame). localX exists only inside draw.', 20, 60);

  fill(20, 140, 220);
  circle(goodX, 210, 80);

  fill(220, 140, 20);
  circle(localX, 210, 80);

  fill(20);
  text('global goodX = ' + goodX, 20, 340);
  text('local localX = ' + localX + ' (cannot be read outside draw)', 20, 365);

  goodX += 0.7;
  if (goodX > width + 40) {
    goodX = -40;
  }
}
