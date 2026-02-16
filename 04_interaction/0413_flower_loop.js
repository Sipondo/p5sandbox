
let petal_count = 9; // change this to get more or fewer petals

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES); // makes it easier to think in 0-360 degrees
	rectMode(CENTER); // Draw rectangles from center
}

function draw() {
	background(245);
	translate(width / 2, height / 2); // move origin to center of flower

	let petal_angle = 360 / petal_count; // angle between each petal
	let petal_width = 200 / petal_count; // width of each petal gets smaller as count increases

	// BONUS: add stalk
	fill(80, 240, 120);
	rect(0, 500, 15, 1000);
	
	fill(240, 140, 80);
	noStroke();
	ellipse(0, 0, 80, 80); // center of flower

	fill(120, 180, 220);
	for (let i = 0; i < petal_count; i++) {
		rect(0, 95, petal_width, 100); // draw a petal
		rotate(petal_angle); // rotate for the next petal
	}
}
