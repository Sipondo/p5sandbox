let CSV_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/city_temperatures.csv";
let table;

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

  // Display some stats
  text("CSV: rows + columns", 20, 35);
  text("Rows: " + table.getRowCount() + " | Columns: " + table.getColumnCount(), 20, 60);

  let columns = table.columns.join(", "); // Combines arrays into a string with commas!
  text("Columns: " + columns, 20, 82);

  // Unstructured access: table.get(row, column) — no need to grab a row first
  text(table.get(0, "city"), 20, 120);
  text(table.get(1, "city"), 20, 150);
  text(table.get(0, "tempC"), 20, 180);
}
