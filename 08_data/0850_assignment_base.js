let MAP_URL = "https://rawcdn.githack.com/Sipondo/creative-programming-2026/57bf1d0b3f25b4baadde2c986a3f43a736b7afc2/lecture_8/media/denmark.jpg";
let denmarkMap;

function preload() {
	// Load the map image before setup/draw starts
	denmarkMap = loadImage(MAP_URL);

	// TODO: load the city data
}

function setup(){
	createCanvas(405, 488); // Correct ratio for image
}

function draw() {
	// Draw map as the background
	background(240);
	image(denmarkMap, 0, 0, width, height);

	// TODO: add some visualisation logic for cities
}
