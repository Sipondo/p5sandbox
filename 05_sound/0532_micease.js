let mic;
let diameter = 50; // Initial diameter for the circle

function setup() {
	createCanvas(400, 400);

	// Create and start the microphone input
	mic = new p5.AudioIn();
	mic.start();
}

function mousePressed() {
	userStartAudio(); // Start the audio context on a user gesture (required in some browsers)
}

function draw() {
	background(230);

	// Get current mic level (0.0 - ~1.0)
	let level = mic.getLevel();
	let newDiameter = map(level, 0, 1, 100, 500); // Map level to a diameter range for better visualization

	diameter = diameter * 0.8 + newDiameter * 0.2; // Ease diameter changes for smoother animation

	// Draw a circle that grows with the sound level
	fill(60, 140, 255);
	circle(width / 2, height / 2, diameter); // Scale level for visibility

	fill(20);
	textSize(13);
	text("Mic level visualization", 10, 20);
}
