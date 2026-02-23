let polySynth;

let notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

let tune = [];
let noteDelays = [];
let lastNoteFrame = 0;

let isPlayingBack = false;
let currentNoteIndex = 0;
let nextNoteTime = 0;

let circles = [];

function setup() {
	createCanvas(700, 400);
	polySynth = new p5.PolySynth();

	textFont("monospace");
	background(245);
}

function draw() {
	// Transparent background for a fading visual trail
	background(245, 245, 245, 50);

	if (isPlayingBack && tune.length > 0 && frameCount >= nextNoteTime) {
		let note = tune[currentNoteIndex];
		playSynthNote(note);
		addCircleForNote(note);

		let waitFrames = noteDelays[currentNoteIndex];
		if (waitFrames === undefined || waitFrames < 1) {
			waitFrames = 20;
		}

		nextNoteTime = frameCount + waitFrames;
		currentNoteIndex = (currentNoteIndex + 1) % tune.length;
	}

	for (let i = circles.length - 1; i >= 0; i--) {
		let circleData = circles[i];
		circleData.life -= 4;

		if (circleData.life <= 0) {
			circles.splice(i, 1);
			continue;
		}

		noStroke();
		fill(circleData.r, circleData.g, circleData.b, circleData.life);
		circle(circleData.x, circleData.y, circleData.size);
	}

	fill(30);
	textSize(15);
	text("Press keys 1-7 to play C major (C4-B4)", 16, 26);
	textSize(13);
	text("Space: play/stop recorded tune", 16, 48);
	text("R: clear recording", 16, 66);
	text("Recorded notes: " + tune.length, 16, 90);
	text("Playback: " + (isPlayingBack ? "ON" : "OFF"), 16, 108);
}

function keyPressed() {
	userStartAudio();

	if (key >= "1" && key <= "7") {
		let index = int(key) - 1;
		let note = notes[index];

		playSynthNote(note);
		addCircleForNote(note);

		tune.push(note);

		if (tune.length === 1) {
			noteDelays.push(20);
		} else {
			let delayFrames = max(1, frameCount - lastNoteFrame);
			noteDelays.push(delayFrames);
		}

		lastNoteFrame = frameCount;
	}

	if (key === " ") {
		if (tune.length > 0) {
			isPlayingBack = !isPlayingBack;
			currentNoteIndex = 0;
			nextNoteTime = frameCount;
		}
	}

	if (key === "r" || key === "R") {
		tune = [];
		noteDelays = [];
		isPlayingBack = false;
		currentNoteIndex = 0;
	}
}

function playSynthNote(note) {
	polySynth.play(note, 0.8, 0, 0.35);
}

function addCircleForNote(note) {
	let noteIndex = notes.indexOf(note);
	let x = map(noteIndex, 0, notes.length - 1, 120, width - 120);
	let y = map(noteIndex, 0, notes.length - 1, height - 80, 120);

	circles.push({
		x: x + random(-12, 12),
		y: y + random(-10, 10),
		size: random(30, 70),
		r: map(noteIndex, 0, notes.length - 1, 60, 255),
		g: map(noteIndex, 0, notes.length - 1, 200, 80),
		b: map(noteIndex, 0, notes.length - 1, 255, 120),
		life: 220,
	});
}
