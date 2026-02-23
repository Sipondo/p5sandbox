let drumX = [];
let drumY = [];
let drumWidth = [];
let drumHeight = [];
let drumBaseColor = [];
let drumHitColor = [];
let isHit = [];
let drumSounds = [];

function preload() {
	// Load drum samples from lecture 5 repository
	drumSounds[0] = loadSound(
		"https://rawcdn.githack.com/Sipondo/creative-programming-2026/793c774ec9b9341473cd847312e7b6e21afcd410/lecture_5/sound/drum.wav"
	);
	drumSounds[1] = loadSound(
		"https://rawcdn.githack.com/Sipondo/creative-programming-2026/793c774ec9b9341473cd847312e7b6e21afcd410/lecture_5/sound/cymbal.wav"
	);
	drumSounds[2] = loadSound(
		"https://rawcdn.githack.com/Sipondo/creative-programming-2026/793c774ec9b9341473cd847312e7b6e21afcd410/lecture_5/sound/snare.wav"
	);
	drumSounds[3] = loadSound(
		"https://rawcdn.githack.com/Sipondo/creative-programming-2026/793c774ec9b9341473cd847312e7b6e21afcd410/lecture_5/sound/cymbal.wav"
	);
}

function setup() {
	createCanvas(600, 400);
	textFont("monospace");

	// Multi-drum setup with arrays (first one is centered)
	drumX = [width / 2, width / 2 - 120, width / 2 + 120, width / 2];
	drumY = [height / 2, height / 2, height / 2, height / 2 - 120];
	drumWidth = [110, 90, 90, 90];
	drumHeight = [110, 90, 90, 90];

	drumBaseColor = [
		color(240, 240, 240),
		color(225, 238, 255),
		color(255, 232, 220),
		color(228, 255, 232),
	];

	drumHitColor = [
		color(255, 180, 120),
		color(120, 190, 255),
		color(255, 150, 150),
		color(140, 255, 170),
	];

	isHit = [false, false, false, false];

	rectMode(CENTER);
}

function draw() {
	background(22);

	for (let i = 0; i < drumX.length; i++) {
		drawDrumPad(
			drumX[i],
			drumY[i],
			drumWidth[i],
			drumHeight[i],
			isHit[i] ? drumHitColor[i] : drumBaseColor[i]
		);
	}

	fill(245);
	noStroke();
	textSize(14);
	textAlign(LEFT, TOP);
	text("Click a pad to play sound", 16, 14);
}

function drawDrumPad(x, y, w, h, padColor) {
	// Use push/pop so each pad transform/style stays isolated
	push();
	translate(x, y);

	stroke(35);
	strokeWeight(2);
	fill(padColor);
	rect(0, 0, w, h, 12);

	fill(40, 40, 40, 35);
	noStroke();
	circle(0, 0, min(w, h) * 0.5);

	pop();
}

function mousePressed() {
	userStartAudio();

	// Check all pads and trigger the one under the mouse
	for (let i = 0; i < drumX.length; i++) {
		let left = drumX[i] - drumWidth[i] / 2;
		let right = drumX[i] + drumWidth[i] / 2;
		let top = drumY[i] - drumHeight[i] / 2;
		let bottom = drumY[i] + drumHeight[i] / 2;

		if (mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom) {
			isHit[i] = true;

			if (drumSounds[i] && drumSounds[i].isLoaded()) {
				drumSounds[i].play();
			}
		}
	}
}

function mouseReleased() {
	for (let i = 0; i < isHit.length; i++) {
		isHit[i] = false;
	}
}
