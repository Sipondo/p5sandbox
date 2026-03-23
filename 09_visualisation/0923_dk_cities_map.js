// Danish cities infographic using CSV from lecture 8
let CSV_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/city_temperatures.csv";
let table;
let animProgress = 0;

function preload() {
  table = loadTable(CSV_URL, "csv", "header");
}

function setup() {
  createCanvas(500, 420);
  noStroke();
}

function draw() {
  background(240, 245, 250);
  animProgress = lerp(animProgress, 1, 0.025);

  // Header
  fill(41, 128, 185);
  rect(0, 0, width, 55);
  fill("white");
  textSize(18);
  textStyle(BOLD);
  textAlign(LEFT, CENTER);
  text("Danish City Temperatures", 15, 18);
  textStyle(NORMAL);
  textSize(11);
  text("Week 4 comparison across cities", 15, 40);

  // Collect week 4 data per city
  let cities = [];
  for (let i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    if (row.getNum("week") === 4) {
      cities.push({
        name: row.getString("city"),
        temp: row.getNum("tempC"),
        humidity: row.getNum("humidity"),
        wind: row.getNum("wind")
      });
    }
  }

  // --- Stat boxes for averages ---
  let avgTemp = 0;
  let avgHum = 0;
  let avgWind = 0;
  for (let i = 0; i < cities.length; i++) {
    avgTemp += cities[i].temp;
    avgHum += cities[i].humidity;
    avgWind += cities[i].wind;
  }
  avgTemp = round(avgTemp / cities.length, 1);
  avgHum = round(avgHum / cities.length);
  avgWind = round(avgWind / cities.length, 1);

  let stats = [
    { label: "Avg temp", value: avgTemp + "°C", col: color(231, 76, 60) },
    { label: "Avg humidity", value: avgHum + "%", col: color(52, 152, 219) },
    { label: "Avg wind", value: avgWind + " km/h", col: color(46, 204, 113) }
  ];

  let boxW = 140;
  let boxGap = 15;
  let boxX = (width - (boxW * 3 + boxGap * 2)) / 2;
  for (let i = 0; i < stats.length; i++) {
    let x = boxX + i * (boxW + boxGap);
    fill("white");
    stroke(220);
    strokeWeight(1);
    rect(x, 68, boxW, 52, 6);

    noStroke();
    fill(stats[i].col);
    textSize(20);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(stats[i].value, x + boxW / 2, 84);
    textStyle(NORMAL);
    fill("grey");
    textSize(10);
    text(stats[i].label, x + boxW / 2, 106);
  }

  // --- Bar chart: temperature per city ---
  let chartTop = 145;
  let chartBottom = 290;
  let barStartX = 60;
  let barW = 70;
  let barGap = 20;

  fill("black");
  textSize(12);
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM);
  text("Temperature (°C) — Week 4", barStartX, chartTop - 5);
  textStyle(NORMAL);

  for (let i = 0; i < cities.length; i++) {
    let x = barStartX + i * (barW + barGap);
    let h = map(cities[i].temp * animProgress, 0, 15, 0, chartBottom - chartTop);

    // Colour by temperature
    let r = map(cities[i].temp, 5, 12, 80, 231);
    let g = map(cities[i].temp, 5, 12, 150, 90);
    fill(r, g, 80);
    rect(x, chartBottom - h, barW, h, 4, 4, 0, 0);

    // Value
    fill("black");
    textSize(12);
    textAlign(CENTER);
    text(cities[i].temp + "°", x + barW / 2, chartBottom - h - 6);

    // Label
    textSize(10);
    text(cities[i].name, x + barW / 2, chartBottom + 14);
  }

  stroke(200);
  strokeWeight(0.5);
  line(barStartX - 5, chartBottom, barStartX + cities.length * (barW + barGap), chartBottom);

  // --- Humidity dots ---
  let dotTop = 330;
  let dotBottom = 395;

  noStroke();
  fill("black");
  textSize(12);
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM);
  text("Humidity (%) — Week 4", barStartX, dotTop - 5);
  textStyle(NORMAL);

  for (let i = 0; i < cities.length; i++) {
    let x = barStartX + i * (barW + barGap) + barW / 2;
    let y = (dotTop + dotBottom) / 2;
    let size = map(cities[i].humidity * animProgress, 0, 100, 10, 55);

    fill(52, 152, 219, 150);
    circle(x, y, size);

    fill("black");
    textSize(10);
    textAlign(CENTER, CENTER);
    text(cities[i].humidity + "%", x, y);

    fill("grey");
    textAlign(CENTER, TOP);
    text(cities[i].name, x, dotBottom + 2);
  }

  // Footer
  fill("grey");
  textSize(9);
  textAlign(RIGHT, BOTTOM);
  text("Data: city_temperatures.csv (lecture 8)", width - 10, height - 5);
}

function mousePressed() {
  animProgress = 0;
}
