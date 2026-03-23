let CSV_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/music_events.csv";
let table;

function preload() {
  table = loadTable(CSV_URL, "csv", "header");
}

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(245);

  fill("black");
  textSize(18);
  text("Music events: attendees", width / 2, 30);

  let startX = 40;
  let bottomY = 360;
  let barWidth = 80;
  let gap = 20;
  let scale = 0.7;

  let count = min(5, table.getRowCount());

  for (let i = 0; i < count; i++) {
    let row = table.getRow(i);
    let name = row.getString("event");
    let attendees = row.getNum("attendees");

    let x = startX + i * (barWidth + gap);
    let barHeight = attendees * scale;

    // Bar
    fill(52, 152, 219);
    rect(x, bottomY - barHeight, barWidth, barHeight, 4, 4, 0, 0);

    // Value
    fill("black");
    textSize(12);
    text(attendees, x + barWidth / 2, bottomY - barHeight - 8);

    // Label
    text(name, x + barWidth / 2, bottomY + 16);
  }

  // Baseline
  stroke(180);
  strokeWeight(1);
  line(30, bottomY, width - 10, bottomY);

  // Source note
  noStroke();
  fill("grey");
  textSize(10);
  text("Data loaded from CSV (lecture 8)", width / 2, height - 8);
}
