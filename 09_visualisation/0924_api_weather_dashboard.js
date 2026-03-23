// Live weather dashboard for Danish cities using Open-Meteo API
let cities = [
  { name: "Copenhagen", lat: 55.6761, lon: 12.5683 },
  { name: "Aarhus", lat: 56.1629, lon: 10.2039 },
  { name: "Odense", lat: 55.4038, lon: 10.4024 },
  { name: "Aalborg", lat: 57.0488, lon: 9.9217 }
];
let weatherData = [];
let loaded = false;
let animProgress = 0;

function setup() {
  createCanvas(500, 420);

  // Fetch current weather for each city
  for (let i = 0; i < cities.length; i++) {
    let url = "https://api.open-meteo.com/v1/forecast" +
      "?latitude=" + cities[i].lat +
      "&longitude=" + cities[i].lon +
      "&current=temperature_2m,wind_speed_10m,relative_humidity_2m" +
      "&daily=temperature_2m_max,temperature_2m_min" +
      "&timezone=Europe/Copenhagen&forecast_days=7";

    loadJSON(url,
      function(data) {
        weatherData.push({
          name: cities[weatherData.length].name,
          temp: data.current.temperature_2m,
          wind: data.current.wind_speed_10m,
          humidity: data.current.relative_humidity_2m,
          maxTemps: data.daily.temperature_2m_max,
          minTemps: data.daily.temperature_2m_min,
          days: data.daily.time
        });
        if (weatherData.length == cities.length) {
          loaded = true;
        }
      }
    );
  }
}

function draw() {
  background(240, 245, 250);

  // Header
  noStroke();
  fill(41, 60, 90);
  rect(0, 0, width, 55);
  fill(255);
  textSize(18);
  textAlign(LEFT, CENTER);
  text("Denmark — Live Weather", 15, 18);
  textSize(11);
  fill(200);
  text("Data from Open-Meteo API (updates every load)", 15, 40);

  if (!loaded) {
    fill(100);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Loading weather data...", width / 2, height / 2);
    return;
  }

  animProgress = lerp(animProgress, 1, 0.03);

  // --- Current conditions: stat cards ---
  let cardW = 105;
  let cardH = 70;
  let cardGap = 12;
  let cardStartX = (width - (cardW * cities.length + cardGap * (cities.length - 1))) / 2;
  let cardY = 68;

  for (let i = 0; i < weatherData.length; i++) {
    let x = cardStartX + i * (cardW + cardGap);
    let w = weatherData[i];

    // Card background
    fill(255);
    stroke(220);
    strokeWeight(1);
    rect(x, cardY, cardW, cardH, 6);

    // City name
    noStroke();
    fill(60);
    textSize(11);

    textAlign(CENTER, TOP);
    text(w.name, x + cardW / 2, cardY + 6);


    // Temperature (big)
    let tempCol = lerpColor(color(52, 152, 219), color(231, 76, 60), map(w.temp, -5, 25, 0, 1));
    fill(tempCol);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(round(w.temp, 1) + "°", x + cardW / 2, cardY + 35);

    // Wind + humidity (small)
    fill(130);
    textSize(9);
    text(round(w.wind) + " km/h  |  " + w.humidity + "%", x + cardW / 2, cardY + 58);
  }

  // --- 7-day forecast: line chart ---
  let chartLeft = 55;
  let chartRight = width - 25;
  let chartTop = 165;
  let chartBottom = 310;

  fill(50);
  textSize(12);
  textAlign(LEFT, BOTTOM);
  noStroke();
  text("7-day forecast (°C)", chartLeft, chartTop - 6);

  // Grid
  stroke(220);
  strokeWeight(0.5);
  let minT = -5;
  let maxT = 20;
  for (let t = minT; t <= maxT; t += 5) {
    let y = map(t, minT, maxT, chartBottom, chartTop);
    line(chartLeft, y, chartRight, y);
    noStroke();
    fill(160);
    textSize(9);
    textAlign(RIGHT, CENTER);
    text(t + "°", chartLeft - 6, y);
    stroke(220);
    strokeWeight(0.5);
  }

  // Draw a line per city
  let lineColors = [
    color(231, 76, 60),
    color(52, 152, 219),
    color(46, 204, 113),
    color(241, 196, 15)
  ];

  for (let c = 0; c < weatherData.length; c++) {
    let w = weatherData[c];
    let maxTemps = w.maxTemps;

    stroke(lineColors[c]);
    strokeWeight(2);
    for (let i = 0; i < maxTemps.length - 1; i++) {
      let x1 = map(i, 0, maxTemps.length - 1, chartLeft + 10, chartRight - 10);
      let y1 = map(maxTemps[i] * animProgress, 0, maxT, chartBottom, chartTop);
      let x2 = map(i + 1, 0, maxTemps.length - 1, chartLeft + 10, chartRight - 10);
      let y2 = map(maxTemps[i + 1] * animProgress, 0, maxT, chartBottom, chartTop);
      line(x1, y1, x2, y2);
    }

    // End label
    let lastX = map(maxTemps.length - 1, 0, maxTemps.length - 1, chartLeft + 10, chartRight - 10);
    let lastY = map(maxTemps[maxTemps.length - 1] * animProgress, 0, maxT, chartBottom, chartTop);
    noStroke();
    fill(lineColors[c]);
    circle(lastX, lastY, 7);
    textSize(9);
    textAlign(LEFT, CENTER);
    text(w.name, lastX + 6, lastY);
  }

  // Day labels
  if (weatherData.length > 0) {
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < 7; i++) {
      let x = map(i, 0, 6, chartLeft + 10, chartRight - 10);
      let d = new Date(weatherData[0].days[i]);
      noStroke();
      fill(120);
      textSize(9);
      textAlign(CENTER, TOP);
      text(dayNames[d.getDay()], x, chartBottom + 4);
    }
  }

  // --- Wind comparison bars ---
  let windTop = 340;
  let windBottom = 400;
  let barW = 80;
  let barGap = 15;
  let barStartX = (width - (barW * weatherData.length + barGap * (weatherData.length - 1))) / 2;

  fill(50);
  textSize(11);
  textAlign(LEFT, BOTTOM);
  noStroke();
  text("Current wind speed (km/h)", barStartX, windTop - 4);

  for (let i = 0; i < weatherData.length; i++) {
    let x = barStartX + i * (barW + barGap);
    let w = weatherData[i];
    let h = map(w.wind * animProgress, 0, 40, 0, windBottom - windTop);

    fill(lineColors[i]);
    noStroke();
    rect(x, windBottom - h, barW, h, 3, 3, 0, 0);

    fill(50);
    textSize(10);
    textAlign(CENTER);
    text(round(w.wind, 1), x + barW / 2, windBottom - h - 5);

    fill(100);
    textSize(9);
    text(w.name, x + barW / 2, windBottom + 12);
  }
}

function mousePressed() {
  animProgress = 0;
}
