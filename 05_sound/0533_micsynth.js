let mono;
let diameter = 50; // Initial diameter for the circle

function setup() {
  createCanvas(400, 400);
  mono = new p5.MonoSynth(); // Build the synthesizer. Don't forget "new"!
  mic = new p5.AudioIn(); // Create an audio input
  mic.start(); // Start the audio input
}

function mousePressed() {
	userStartAudio(); // Start the audio context on a user gesture (required in some browsers)
}

function draw() {
  fill("black");
  background(230);
  textSize(16);
  text("Click to play", 20, 65);

  if (mouseIsPressed) {
    let level = mic.getLevel(); // Get current mic level (0.0 - ~1.0)
    let note = round(map(level, 0, 1, 100, 1000)); // Map x to frequencies
    let length = map(mouseY, height, 0, 0, 1); // Map y to note length (0 to 1 seconds)

    mono.play(note, 1, 0, length); // Play note

    let newDiameter = map(level, 0, 1, 100, 500); // Map level to a diameter range for better visualization

    diameter = diameter * 0.8 + newDiameter * 0.2; // Ease diameter changes for smoother animation

    // Draw a circle that grows with the sound level
    fill(60, 140, 255);
    circle(width / 2, height / 2, diameter); // Scale level for visibility
  }
}
