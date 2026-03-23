let JSON_URL = "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_8/data/creative_projects.json";
let data;
let activeTag = "visual";

function preload() {
  // Load the json
  data = loadJSON(JSON_URL);
}

function setup() {
  createCanvas(500, 460);
}

function draw() {
  background(245);
  fill(20);
  textSize(22);
  
  text("JSON filtering by tag", 20, 36);
  text("Press 1=visual, 2=audio, 3=data, 4=game", 20, 60);
  text("Active tag: " + activeTag, 20, 84);

  let y = 130;
  let projects = data.projects;

  // Loop over the projects
  for (let i = 0; i < projects.length; i++) {
    let p = projects[i];

    // New method! We use array.includes() to check if the tag is in the array
    if (p.tags.includes(activeTag)) {
      fill(50, 140, 230);
      rect(20, y - 18, 420, 24, 6);
      fill(255);
      text(p.name + " | tags: " + p.tags.join(", "), 30, y); // Join the tags into a string for display
      y += 34;
    }
  }
}

function keyPressed() {
  // Set the filter
  if (key == "1") activeTag = "visual";
  if (key == "2") activeTag = "audio";
  if (key == "3") activeTag = "data";
  if (key == "4") activeTag = "game";
}
