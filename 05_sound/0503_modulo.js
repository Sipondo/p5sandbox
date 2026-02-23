function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	fill("white");
	rect(100, 100, 120, 120); // Box in the background

	let moduloX = (mouseX - 100) % 120 + 100; // Modulo to wrap mouseX between 100 and 220

	fill("blue");
	circle(moduloX, mouseY, 40); // Draw circle on constrained position
}
