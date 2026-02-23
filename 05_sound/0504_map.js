function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	fill("white");
	rect(100, 100, 120, 120); // Box in the background

	let mappedX = map(mouseX, 0, width, 100, 220); // Map full canvas mouseX range to square x range

	fill("blue");
	circle(mappedX, mouseY, 40); // Draw circle on mapped position
}
