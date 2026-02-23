let polySynth;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(20);
  text('Click to play', 20, 20);

  polySynth = new p5.PolySynth(); // Synth that can play multiple at once
}

function mousePressed() {
  userStartAudio();

  // Notes can overlap with each other. This is a C chord
  polySynth.play('C4', 1, 0, 1.5);
  polySynth.play('E4', 1, 0, 1.5);
  polySynth.play('G4', 1, 0, 1.5);
}
