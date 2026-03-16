var CSV_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/city_temperatures.csv";
let table;
let cities = ["Copenhagen", "Aarhus", "Odense", "Aalborg"];
let cityIndex = 0;

function preload() {
  table = loadTable(CSV_URL, "csv", "header");
}

function setup() {
  createCanvas(900, 420);
  textFont("monospace");
}

function draw() {
  background(248);
  var city = cities[cityIndex];

  fill(20);
  textSize(20);
  text("CSV filtering", 20, 36);
  textSize(14);
  text("Press SPACE to switch city", 20, 60);
  text("Current city: " + city, 20, 82);

  let y = 120;
  let sum = 0;
  let count = 0;

  for (let r = 0; r < table.getRowCount(); r++) {
    var row = table.getRow(r);
    if (row.get("city") === city) {
      var week = row.get("week");
      var temp = row.get("tempC");
      var hum = row.get("humidity");
      text("Week " + week + ": " + temp + "C, humidity " + hum + "%", 20, y);
      y += 24;
      sum += temp;
      count += 1;
    }
  }

  if (count > 0) {
    text("Average temperature: " + nf(sum / count, 1, 2) + "C", 20, y + 12);
  }
}

function keyPressed() {
  if (key === " ") {
    cityIndex = (cityIndex + 1) % cities.length;
  }
}
