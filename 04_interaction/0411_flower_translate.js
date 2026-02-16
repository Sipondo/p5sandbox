function setup() {
	createCanvas(400, 400);
	rectMode(CENTER); // Draw rectangles from center
}

function draw() {
	background(245);

	// Move origin to center of flower
	translate(width / 2, height / 2);

	// Center of flower
	fill(240, 140, 80);
	noStroke();
	ellipse(0, 0, 80, 80);

	// Petals
	fill(120, 180, 220);
	rect(0, -95, 30, 100);
	rect(0, 95, 30, 100);
	rect(-95, 0, 100, 30);
	rect(95, 0, 100, 30);
}
