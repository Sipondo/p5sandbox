var JSON_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026-dev/refs/heads/main/lectures/lecture_8/data/creative_projects.json";
let data;
let activeTag = "visual";

function preload() {
  data = loadJSON(JSON_URL);
}

function setup() {
  createCanvas(900, 460);
  textFont("monospace");
}

function draw() {
  background(245);
  fill(20);
  textSize(20);
  text("JSON filtering by tag", 20, 36);
  textSize(14);
  text("Press 1=visual, 2=audio, 3=data, 4=game", 20, 60);
  text("Active tag: " + activeTag, 20, 84);

  let y = 130;
  var projects = data.projects;

  for (let i = 0; i < projects.length; i++) {
    var p = projects[i];
    if (p.tags.includes(activeTag)) {
      fill(50, 140, 230);
      rect(20, y - 18, 420, 24, 6);
      fill(255);
      text(p.name + " | tags: " + p.tags.join(", "), 30, y);
      y += 34;
    }
  }
}

function keyPressed() {
  if (key === "1") activeTag = "visual";
  if (key === "2") activeTag = "audio";
  if (key === "3") activeTag = "data";
  if (key === "4") activeTag = "game";
}
