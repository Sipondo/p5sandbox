var JSON_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/creative_projects.json";
let data;

function preload() {
  // Load the json
  data = loadJSON(JSON_URL);
}

function setup() {
  createCanvas(900, 500);
}

function draw() {
  background(248);
  fill(20);
  textSize(20);
  text("JSON nested data -> visual metrics", 100, 35);

  // Grab the things we want to loop over
  var projects = data.projects;

  for (let i = 0; i < projects.length; i++) {
    // Grab the metric. Note the nested access
    var p = projects[i];
    var complexity = p.metrics.complexity;
    var wow = p.metrics.wow;

    // Location
    var x = 130 + i * 200;
    var y = 270;
    
    // We use map() for these properties to turn them into appropriate values for visualisation
    var size = map(complexity, 1, 10, 40, 140);
    var blue = map(wow, 1, 10, 70, 220);
    
    fill(40, blue, 220, 180);
    circle(x, y, size);

    fill(20);
    text(p.name + "\nC:" + complexity + " W:" + wow, x-50, y + 95);
  }
}
