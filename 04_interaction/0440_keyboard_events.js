let lastCharacter = '';
let backgroundColor = 245;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(backgroundColor);

	// Display instructions
	fill(0);
	textSize(14);
	text("Try: Press and release keys, type characters", 20, 20);


	// Display last character typed
	fill(0);
	text("Last character typed: " + lastCharacter, 20, 80);

	// Draw a circle that changes color based on specific keys
	fill(100, 150, 220);
	ellipse(300, 200, 100, 100);

	// Show key help
	textSize(11);
	fill(100);
	text("Press S to change background color", 20, 350);
	text("Press R to reset", 20, 370);
}

function keyPressed() {
	// S key changes background
	if (key == 's' || key == 'S') {
		backgroundColor = color(random(100, 255), random(100, 255), random(100, 255));
	}

	// R key resets
	if (key == 'r' || key == 'R') {
		backgroundColor = 245;
		keysPressed = {};
	}
}

function keyReleased() {
	// Called when a key is released
	console.log("keyReleased(): " + key);
}

function keyTyped() {
	// Called when a character key is typed (not special keys)
	lastCharacter = key;
}
