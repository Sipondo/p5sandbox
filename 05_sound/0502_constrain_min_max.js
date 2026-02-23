function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	fill("white");
	rect(100, 100, 120, 120); // Box in the background

	let constrainedX = min(mouseX, 220); // Constrain right side (100 + 120)

	fill("red");
	circle(constrainedX, mouseY, 50); // Draw circle with right side constrained

	fill("blue");
	constrainedX = max(constrainedX, 100); // Constrain left side
	circle(constrainedX, mouseY, 40); // Draw circle on constrained position
}
