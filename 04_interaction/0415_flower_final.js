function setup() {
	createCanvas(450, 400);
	angleMode(DEGREES); // makes it easier to think in 0-360 degrees
	rectMode(CENTER); // Draw rectangles from center
	noStroke();
}

function flower(x, y, petal_count, colour, speed) {
	push();
	translate(x, y); // move origin to center of flower

	let petal_angle = 360 / petal_count; // angle between each petal
	let petal_width = 100 / petal_count; // width of each petal gets smaller as count increases

	// BONUS: add stalk
	fill(80, 240, 120);
	rect(0, 500, 8, 1000);
	
	fill(240, 140, 80);
	ellipse(0, 0, 40, 40); // center of flower

	fill(colour);
	rotate(frameCount * speed); // rotate the whole flower over time
	for (let i = 0; i < petal_count; i++) {
		rect(0, 45, petal_width, 50); // draw a petal
		rotate(petal_angle); // rotate for the next petal
	}
	pop();
}

function draw() {
	background(155, 226, 255, 150); // blur effect

	flower(100, 100, 5, "red", 0.5);
	flower(300, 100, 9, "blue", 1.2);
	flower(350, 300, 7, "cyan", 0.3);
	flower(240, 280, 12, "purple", 2.0);
	flower(130, 200, 20, "orange", 0.8);
}
