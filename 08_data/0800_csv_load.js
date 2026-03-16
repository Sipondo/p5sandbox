var CSV_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/city_temperatures.csv";
let table;

function preload() {
  table = loadTable(CSV_URL, "csv", "header");
}

function setup() {
  createCanvas(900, 420);
  textFont("monospace");
}

function draw() {
  background(245);
  fill(20);
  textSize(20);
  text("CSV basics: rows + columns", 20, 35);
  textSize(14);
  text("Rows: " + table.getRowCount() + " | Columns: " + table.getColumnCount(), 20, 60);

  var columns = table.columns.join(", ");
  text("Columns: " + columns, 20, 82);

  textSize(13);
  for (let i = 0; i < min(8, table.getRowCount()); i++) {
    var row = table.getRow(i);
    var line = row.get("city") + "  week=" + row.get("week") + "  temp=" + row.get("tempC") + "C";
    text(line, 20, 120 + i * 24);
  }
}
