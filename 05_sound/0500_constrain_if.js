function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
    fill("white");
	rect(100, 100, 120, 120); // Box in the background

	let constrainedX = mouseX; // We need to manipulate the value of mouseX, so we copy it to a new variable

	if (constrainedX < 100) { // Constrain left side
		constrainedX = 100;
	}
	else if (constrainedX > 220) { // Constrain right side (100 + 120)
		constrainedX = 220;
	}

    fill("blue");
	circle(constrainedX, mouseY, 40); // Draw circle on constrained position
}
