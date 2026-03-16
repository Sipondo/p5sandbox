var JSON_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026-dev/refs/heads/main/lectures/lecture_8/data/creative_projects.json";
let data;

function preload() {
  data = loadJSON(JSON_URL);
}

function setup() {
  createCanvas(900, 500);
  textFont("monospace");
  textAlign(CENTER, CENTER);
}

function draw() {
  background(248);
  fill(20);
  textAlign(LEFT, BASELINE);
  textSize(20);
  text("JSON nested data -> visual metrics", 20, 35);

  var projects = data.projects;

  for (let i = 0; i < projects.length; i++) {
    var p = projects[i];
    var complexity = p.metrics.complexity;
    var wow = p.metrics.wow;

    var x = 130 + i * 200;
    var y = 270;
    var size = map(complexity, 1, 10, 40, 140);

    fill(40, map(wow, 1, 10, 70, 220), 220, 180);
    noStroke();
    circle(x, y, size);

    fill(20);
    textAlign(CENTER, CENTER);
    textSize(12);
    text(p.name + "\nC:" + complexity + " W:" + wow, x, y + 95);
  }
}
