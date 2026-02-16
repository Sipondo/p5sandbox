function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES); // makes it easier to think in 0-360 degrees
	rectMode(CENTER); // Draw rectangles from center
	noStroke();
}

function draw() {
	background(245);

	// Move origin to center of flower
	translate(width / 2, height / 2);

	// Center of flower
	fill(240, 140, 80);
	ellipse(0, 0, 80, 80);

	// Petals
	fill(120, 180, 220);
	rect(0, 95, 30, 100);
	rotate(45);
	rect(0, 95, 30, 100);
	rotate(45);
	rect(0, 95, 30, 100);
	rotate(45);
	rect(0, 95, 30, 100);
	rotate(45);
	rect(0, 95, 30, 100);
	rotate(45);
	rect(0, 95, 30, 100);
	rotate(45);
	rect(0, 95, 30, 100);
	rotate(45);
	rect(0, 95, 30, 100);
}
