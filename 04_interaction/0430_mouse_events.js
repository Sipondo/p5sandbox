let isPressed = false;
let circleSize = 50;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(245);

	// Draw a circle that changes based on mouse state
	fill(100, 150, 220);
	ellipse(mouseX, mouseY, circleSize, circleSize);


	// Display current state
	fill(0);
	textSize(12);
	if (isPressed) {
		text("Status: pressed", 20, 40);
	} else {
		text("Status: released", 20, 40);
	}
}

function mousePressed() {
	// Called when the mouse button is pressed
	isPressed = true;
}

function mouseReleased() {
	// Called when the mouse button is released
	isPressed = false;
	trails = []; // clear the trail
}

function mouseClicked() {
	// Called when the mouse button is clicked (pressed and released)
	circleSize = random(30, 100); // change circle size on click
}

function mouseWheel(event) {
	// Called when the mouse wheel is scrolled
	// event.delta is positive when scrolling down, negative when scrolling up
	circleSize += event.delta
	return false; // TIP: prevent page scrolling
}
