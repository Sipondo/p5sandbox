const JSON_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/creative_projects.json";
let data;

function preload() {
  data = loadJSON(JSON_URL);
}

function setup() {
  createCanvas(900, 420);
  textFont("monospace");
}

function draw() {
  background(245);
  fill(20);
  textSize(20);
  text("JSON basics: objects and arrays", 20, 35);
  textSize(14);

  const projects = data.projects;
  text("Projects loaded: " + projects.length, 20, 65);

  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const line = p.name + " | team: " + p.team.join("+") + " | tags: " + p.tags.join(", ");
    text(line, 20, 105 + i * 28);
  }
}
