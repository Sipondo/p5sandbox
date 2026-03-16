var CSV_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/music_events.csv";
let events;

function preload() {
  events = loadTable(CSV_URL, "csv", "header");
}

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(244);
  textSize(22);
  text("CSV -> visualization (bar chart)", 20, 35);

  // Layout values for the chart area
  var startX = 40;
  var barWidth = 90;
  var gap = 50;

  // Convert attendees to pixels with a fixed multiplier
  var pixelsPerPerson = 0.8;
	
  // We only have room for 4
  for (let i = 0; i < min(4, events.getRowCount()); i++) {
    // Grab data for colunmn
    var row = events.getRow(i);
    var name = row.getString("event");
    var attendees = row.getNum("attendees");
    var energy = row.getNum("energy");
		
    // Calculate location and height
    var x = startX + i * (barWidth + gap);
    var h = attendees * pixelsPerPerson;

    // Color bands: low, medium, high energy
    if (energy < 0.34) {
      fill(60, 120, 220);
    } else if (energy < 0.67) {
      fill(60, 180, 220);
    } else {
      fill(60, 230, 220);
    }
    rect(x, 320-h, 90, h, 10);

    fill("black");
    // Show label and value under each bar
    text(name, x, 345);
    text(attendees + " ppl", x, 385);
  }
}
