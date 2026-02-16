let x = 200;
let y = 200;
let speed = 5;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(245);

	// Check arrow keys and move the circle
	if (keyIsDown(LEFT_ARROW)) {
		x -= speed; // move left
	}
	if (keyIsDown(RIGHT_ARROW)) {
		x += speed; // move right
	}
	if (keyIsDown(UP_ARROW)) {
		y -= speed; // move up
	}
	if (keyIsDown(DOWN_ARROW)) {
		y += speed; // move down
	}

	// Draw the circle
	fill(100, 150, 220);
	ellipse(x, y, 50, 50);

	// Instructions
	fill(0);
	textSize(24);
	text("Use arrow keys to move the circle", 20, 30);
    text("(may need to click canvas first)", 20, 70);
}
