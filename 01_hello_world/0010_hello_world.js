function setup() {
    createCanvas(1200, 900);
  	background(220);
}

function draw() {
  	noStroke();
    // Draw a circle that follows the mouse
  	fill(220, 220, 220);
  	circle(mouseX, mouseY, 100);
  
    fill(random(200, 255), random(200, 255), random(200, 255));
    circle(random(0, width), random(0, height), random(75, 150));
  
    // Draw some text
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(100);
    text('Ties', width/2, height/2);
}
