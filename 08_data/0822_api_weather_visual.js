let tempC = null;
let wind = null;
let statusText = "Loading weather...";

function setup() {
  createCanvas(900, 460);
  textFont("monospace");
  fetchWeather();
}

function draw() {
  background(240);
  fill(20);
  textSize(20);
  text("API -> live values -> visuals", 20, 36);
  textSize(14);
  text("Copenhagen weather from Open-Meteo (press R to refresh)", 20, 60);

  if (tempC === null || wind === null) {
    text(statusText, 20, 90);
    return;
  }

  text("Temperature: " + nf(tempC, 1, 1) + " C", 20, 90);
  text("Wind speed: " + nf(wind, 1, 1) + " km/h", 20, 112);

  var circleSize = map(tempC, -5, 30, 40, 220, true);
  var lineCount = int(map(wind, 0, 40, 3, 35, true));

  noStroke();
  fill(255, map(tempC, -5, 30, 130, 20, true), 40, 190);
  circle(240, 270, circleSize);

  stroke(30, 90, 170);
  strokeWeight(2);
  for (let i = 0; i < lineCount; i++) {
    var y = 200 + i * 6;
    line(430, y, 430 + random(90, 260), y + random(-8, 8));
  }
}

function fetchWeather() {
  statusText = "Loading weather...";
  var url = "https://api.open-meteo.com/v1/forecast?latitude=55.6761&longitude=12.5683&current=temperature_2m,wind_speed_10m";
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      tempC = json.current.temperature_2m;
      wind = json.current.wind_speed_10m;
      statusText = "";
    })
    .catch(() => {
      statusText = "Could not fetch weather data.";
    });
}

function keyPressed() {
  if (key === "r" || key === "R") fetchWeather();
}
