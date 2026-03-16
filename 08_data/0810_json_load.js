const JSON_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/creative_projects.json";
let data;

function preload() {
  // Load our json data tree
  data = loadJSON(JSON_URL);
}

function setup() {
  createCanvas(600, 420);
}

function draw() {
  background(245);
  textSize(20);
  
  // Display some stats
  text("JSON: objects and arrays", 20, 35);
  const projects = data.projects;
  text("Projects loaded: " + projects.length, 20, 65);

  // Loop over the data points
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];

    // We print a few things here, concatenated with +.
    const line = p.name + " | team: " + p.team.join("+") + " | tags: " + p.tags.join(", "); //join() turns the array into a string here
    text(line, 20, 105 + i * 28);
  }
}
