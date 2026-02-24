function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	fill("white");
	rect(100, 100, 120, 120); // Box in the background

	let moduloX = mouseX % 220; // Modulo to wrap mouseX

	fill("blue");
	circle(moduloX, mouseY, 40); // Draw circle on constrained position
}
