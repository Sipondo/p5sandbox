let showCircle = false;

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(245);

  fill(20);
  textSize(18);
  text('No output? Use a checklist.', 20, 35);
  textSize(14);
  text('1) Open Inspect -> Console  2) Read first red error  3) Check setup()/draw()  4) Check colors', 20, 60);
  text('Press V to toggle the circle visibility.', 20, 85);

  fill(255);
  rect(20, 110, 300, 220);

  if (showCircle) {
    fill(80, 140, 255);
  } else {
    fill(255);
  }
  noStroke();
  circle(170, 220, 130);

  fill(20);
  textSize(14);
  text(showCircle ? 'Visible: fill is blue' : 'Hidden: white on white', 20, 355);
}

function keyPressed() {
  if (key === 'v' || key === 'V') {
    showCircle = !showCircle;
    console.log('showCircle:', showCircle);
  }
}
