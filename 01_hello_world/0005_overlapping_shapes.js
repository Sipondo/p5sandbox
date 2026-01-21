function setup() {
  createCanvas(400, 400);  
}

function draw() {
  background(105, 109, 125);
  
  strokeWeight(15);
  stroke(142, 112, 141);
  fill(121, 159, 135);
  ellipse(250, 240, 260, 360);
  fill(191, 159, 135);
  rect(80, 80, 100, 100);
  
  strokeWeight(25);
  stroke(191, 159, 135);
  fill(205, 198, 165);
  ellipse(230, 250, 250, 250);
  
  strokeWeight(10);
  stroke(205, 198, 165);
  fill(105, 109, 125);
  rect(-10, 270, 300, 1000);
  
  strokeWeight(10);
  stroke(105, 109, 125);
  fill(105, 109, 125);
  ellipse(230, 270, 100, 100);
}
