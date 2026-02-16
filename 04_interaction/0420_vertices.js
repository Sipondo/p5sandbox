function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(245);

    // Set origin to center
	translate(width / 2, height / 2);

	fill(240, 200, 80);
	stroke(20);
	strokeWeight(2);

	beginShape(); // start defining a custom shape
	vertex(0, -100); // top point
	vertex(30, -30);
	vertex(100, -30); // right outer point
	vertex(40, 20);
	vertex(60, 90); // bottom right
	vertex(0, 50);
	vertex(-60, 90); // bottom left
	vertex(-40, 20);
	vertex(-100, -30); // left outer point
	vertex(-30, -30);
	endShape(CLOSE); // finish the shape and close it
}
