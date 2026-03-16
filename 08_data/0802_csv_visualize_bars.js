var CSV_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026-dev/refs/heads/main/lectures/lecture_8/data/music_events.csv";
let events;

function preload() {
  events = loadTable(CSV_URL, "csv", "header");
}

function setup() {
  createCanvas(900, 500);
  textFont("monospace");
}

function draw() {
  background(244);
  fill(20);
  textSize(20);
  text("CSV -> visualization (bar chart)", 20, 35);

  var maxAtt = max(events.getColumn("attendees").map(Number));

  for (let i = 0; i < events.getRowCount(); i++) {
    var row = events.getRow(i);
    var name = row.getString("event");
    var attendees = row.getNum("attendees");
    var energy = row.getNum("energy");

    var x = 40 + i * 140;
    var h = map(attendees, 0, maxAtt, 0, 300);
    var y = 420 - h;

    fill(40, map(energy, 0, 1, 80, 220), 200);
    rect(x, y, 90, h, 10);

    fill(20);
    textSize(12);
    text(name, x, 445);
    text(attendees + " ppl", x, 465);
  }
}
