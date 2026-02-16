function setup() {
	createCanvas(400, 400);
	rectMode(CENTER); // Draw rectangles from center
}

function draw() {
	background(245);
	let cx = width / 2;
	let cy = height / 2;

    // Center of flower
	fill(240, 140, 80);
	noStroke();
	ellipse(cx, cy, 80, 80);

    // Petals
	fill(120, 180, 220);
	rect(cx, cy - 95, 30, 100);
	rect(cx, cy + 95, 30, 100);
	rect(cx - 95, cy, 100, 30);
	rect(cx + 95, cy, 100, 30);
}
