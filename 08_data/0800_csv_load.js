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

  // Loop over the actual data
  for (let i = 0; i < min(8, table.getRowCount()); i++) {
    let row = table.getRow(i);

    // We print a few things here, concatenated with +.
    let line = row.get("city") + "  week=" + row.get("week") + "  temp=" + row.get("tempC") + "C";
    text(line, 20, 120 + i * 30);
  }
}
