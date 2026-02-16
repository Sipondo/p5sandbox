let x = 0;
let y = 0;

function setup() {
	createCanvas(600, 400);
	x = width / 2;
	y = height / 2;
}

function draw() {
	background(245);

	// Apply easing formula to x
	// currentValue = 0.9 * currentValue + 0.1 * targetValue
	x = 0.9 * x + 0.1 * mouseX;

	// Apply easing formula to y
	y = 0.9 * y + 0.1 * mouseY;

	// Draw the circle that follows the mouse with easing
	fill(100, 150, 220);
	ellipse(x, y, 50, 50);

	// Instructions
	fill(0);
	textSize(14);
	text("Move your mouse around", 20, 20);
}
