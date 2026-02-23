let soundFile;

function preload() {
  soundFile = loadSound("https://rawcdn.githack.com/Sipondo/creative-programming-2026/7bcbf236e2ca4d161acb370092f669ce38cd543a/lecture_5/sound/yogabells.wav");
}

function setup() {
  createCanvas(100, 100);
  background(220);
  text("Hold to play, release to pause", 10, 20, width - 20);
}

function draw() {
  let volume = map(mouseX, 0, width, 0, 1); // Map mouseX to volume range
  soundFile.setVolume(volume); // Set the volume of the sound
}

function mousePressed() {
  userStartAudio(); // Start audio
  soundFile.loop(); // Loop instead of play
  background(0, 200, 50); // Turn the background green
}

function mouseReleased() {
  soundFile.pause(); // Pause the sound
  background(220); // Reset background
}
