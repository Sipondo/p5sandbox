let API_URL = "https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.90&current=temperature_2m,wind_speed_10m";
let weather;

function preload() {
	// Load API data before setup/draw start
	weather = loadJSON(API_URL);
}

function setup() {
	createCanvas(560, 240);
	textFont("monospace");
}

function draw() {
	background(245);
	fill(20);
	textSize(22);
	text("Open-Meteo with loadJSON()", 20, 36);

	// Read values from the JSON response
	let current = weather.current;
	let temp = current.temperature_2m;
	let wind = current.wind_speed_10m;

	textSize(16);
	text("Amsterdam", 20, 80);
	text("Temperature: " + temp + " C", 20, 112);
	text("Wind speed: " + wind + " km/h", 20, 142);
}
