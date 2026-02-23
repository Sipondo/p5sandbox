let mono;

function setup() {
	createCanvas(400, 400);
	mono = new p5.MonoSynth(); // Build the synthesizer. Don't forget "new"!
}

function draw() {
	background(230);
	textSize(16);
	text("MonoSynth demo", 20, 40);
	text("Click to play", 20, 65);
	text("mouseX = pitch, mouseY = volume", 20, 85);
}

function mousePressed() {
	userStartAudio(); // Start the audio context on a user gesture (required in some browsers)

	let note = round(map(mouseX, 0, width, 100, 1000)); // Map x to frequencies
	let length = map(mouseY, height, 0, 0, 1); // Map y to note length (0 to 1 seconds)

	mono.play(note, 1, 0, length); // Play note
}
