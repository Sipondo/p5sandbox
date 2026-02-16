function setup() {
	createCanvas(600, 300);
}

function draw() {
	background(245);

	// Global drawing state.
	stroke(20);
	strokeWeight(2);
	fill(240, 100, 80);
	rect(40, 40, 140, 80);

	// Local overrides that do not leak out.
	push();
	stroke(20, 120, 220);
	strokeWeight(6);
	fill(80, 200, 140);
	ellipse(320, 90, 120, 120);
	pop();

	// Back to the original styles.
	rect(40, 180, 140, 80);
	ellipse(320, 210, 120, 120);
}
