let cymbal;
let drum;
let snare;

function preload() {
	cymbal = loadSound( // Load the three sounds. You should prefer using local files, but here we load from a URL for ease of sharing
		"https://rawcdn.githack.com/Sipondo/creative-programming-2026/793c774ec9b9341473cd847312e7b6e21afcd410/lecture_5/sound/cymbal.wav"
	);
	drum = loadSound(
		"https://rawcdn.githack.com/Sipondo/creative-programming-2026/793c774ec9b9341473cd847312e7b6e21afcd410/lecture_5/sound/drum.wav"
	);
	snare = loadSound(
		"https://rawcdn.githack.com/Sipondo/creative-programming-2026/793c774ec9b9341473cd847312e7b6e21afcd410/lecture_5/sound/snare.wav"
	);
}

function setup() {
	createCanvas(400, 200);
}

function draw() {
	background(230);
	textSize(16);
	text("Keys: C = cymbal, D = drum, S = snare", 20, 40);
}

function keyPressed() {
	userStartAudio(); // Start audio

	if (key === "c" || key === "C") {
		cymbal.play(); // Play on C key
	}

	if (key === "d" || key === "D") {
		drum.play(); // Play on D key
	}

	if (key === "s" || key === "S") {
		snare.play(); // Play on S key
	}
}
