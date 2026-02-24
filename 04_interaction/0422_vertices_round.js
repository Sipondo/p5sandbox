function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(245);
	fill("red");
	stroke(20);
	strokeWeight(2);
    
    // Pointed heart (mixing vertex and bezierVertex)
    push();
	translate(width / 4, height / 4);
	beginShape(); // start defining a heart shape
    vertex(0, 150); // south point
    vertex(-100, 0); // bottom left
    bezierVertex(-110, -110, -30, -110, 0, -50); // top left round
    bezierVertex(30, -110, 110, -110, 100, 0); // top right round
	vertex(0, 150); // bottom right
	endShape(CLOSE); // finish the shape and close it
    pop();
    
    // Round heart (only bezierVertex)
    push();
  	translate(3 * width / 4, height / 4);
  	beginShape(); // start defining a heart shape
    vertex(0, 100); // south point
    bezierVertex(-90, 35, -95, 30, -100, 0); // bottom left
    bezierVertex(-110, -110, -30, -110, 0, -50); // top left round
    bezierVertex(30, -110, 110, -110, 100, 0); // top right round
	bezierVertex(95, 30, 90, 35, 0, 100); // bottom right
	endShape(CLOSE); // finish the shape and close it
    pop();
}
