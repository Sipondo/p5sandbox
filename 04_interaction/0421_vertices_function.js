function setup() {
	createCanvas(400, 400);
}

function star(x, y) {
	// Move to the location without affecting the global state
	push();
	translate(x, y);

	beginShape(); // start defining a custom shape
	vertex(0, -40); // top point
	vertex(12, -12);
	vertex(40, -12); // right outer point
	vertex(16, 8);
	vertex(24, 36); // bottom right
	vertex(0, 20);
	vertex(-24, 36); // bottom left
	vertex(-16, 8);
	vertex(-40, -12); // left outer point
	vertex(-12, -12);
	endShape(CLOSE); // finish the shape and close it

	pop();
}

function draw() {
	background(245);

	fill(240, 200, 80);
	stroke(20);
	strokeWeight(2);

	// Draw stars at different locations by calling the function
	star(100, 100);
	star(300, 100);
	star(200, 280);
}

