function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(248);

  fill(20);
  textSize(16);
  text('Loop boundaries: < vs <=', 20, 30);
  textSize(13);
  text('Top row uses i < 10 (10 bars). Bottom row uses i <= 10 (11 bars, off-by-one).', 20, 52);

  noStroke();
  for (let i = 0; i < 10; i++) {
    fill(40, 140, 230);
    rect(20 + i * 62, 90, 56, 80);
  }

  for (let i = 0; i <= 10; i++) {
    fill(230, 120, 40);
    rect(20 + i * 62, 220, 56, 80);
  }

  fill(20);
  text('Top count: 10', 20, 190);
  text('Bottom count: 11', 20, 330);
}
