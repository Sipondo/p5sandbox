let names = ["alex", "sam", "maria", "john", "sasha"];
let nameIndex = 0;
let resultText = "Click to predict a name";
let statusText = "";

function setup() {
	createCanvas(700, 320);
	// Grab us an initial prediction
	fetchPrediction();
}

function draw() {
	background(245);

	// Bunch of drawing logic
	fill(20);
	textSize(22);
	text("Goofy Name API: genderize.io", 20, 36);

	textSize(14);
	text("Click anywhere to try next name", 20, 62);
	text(statusText, 20, 84);

	fill(30, 40, 80);
	rect(20, 110, width - 40, 170, 12);

	fill(255);
	textSize(20);
	text(resultText, 40, 170, width - 80, 130);
}

function mousePressed() {
	// New request on mouse press
	nameIndex = (nameIndex + 1) % names.length;
	fetchPrediction();
}

function fetchPrediction() {
	// Status text while we wait for the response
	statusText = "Fetching...";

	let name = names[nameIndex];

	// Init the load request
	loadJSON(
    // Send the name!
		"https://api.genderize.io/?name=" + name,
		(data) => {
			// Code on success
			let g = data.gender || "unknown";
			let p = nf((data.probability || 0) * 100, 1, 1);
			resultText = "name: " + data.name + " gender: " + g + " probability: " + p + "%";
			statusText = "Loaded";
		},
		() => {
			// Code on error
			resultText = "Request failed. Try again.";
			statusText = "Request failed";
		}
	);
}
