let CSV_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/city_temperatures.csv";
let table;

let cities = ["Copenhagen", "Aarhus", "Odense", "Aalborg"]; // Hardcoded list of cities. We could also grab this from the table directly!
let cityIndex = 0;

function preload() {
  // Load our csv into a global variable
  table = loadTable(CSV_URL, "csv", "header");
}

function setup() {
  createCanvas(500, 420);
}

function draw() {
  background(245);
  textSize(20);

  // Select a city based on index
  let city = cities[cityIndex];
  text("City: " + city + "  (press SPACE to switch)", 20, 35);

  // Filter rows by the selected city
  let rows = table.findRows(city, "city");

  // Same display logic
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let line = "week=" + row.get("week") + "  temp=" + row.get("tempC") + "C";
    text(line, 20, 75 + i * 30);
  }
}

function keyPressed() {
  // Swap on spacebar
  if (key == " ") {
    cityIndex = (cityIndex + 1) % cities.length;
  }
}
