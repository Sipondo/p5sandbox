let lastCharacter = '';
let backgroundColor = 245;

function setup() {
	createCanvas(600, 400);
  textSize(24);
}

function draw() {
	background(backgroundColor);

	// Display instructions
	fill(0);
	text("Try: Press and release keys, type characters", 20, 20);

	// Display last character typed
	fill(0);
	text("Last character typed: " + lastCharacter, 20, 80);

	// Show key help
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
