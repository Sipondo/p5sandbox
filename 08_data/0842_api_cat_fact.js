let catFact = "Loading cat fact...";
let statusText = "";

function setup() {
  createCanvas(900, 420);
  textFont("monospace");
  fetchCatFact();
}

function draw() {
  background(245);

  fill(20);
  textSize(22);
  text("Random Cat Fact", 20, 36);

  textSize(14);
  text("Click anywhere to get a new fact", 20, 62);
  text(statusText, 20, 84);

  fill(30, 40, 80);
  rect(20, 110, width - 40, height - 140, 12);

  fill(255);
  textSize(20);
  textWrap(WORD);
  text(catFact, 40, 150, width - 80, height - 180);
}

function mousePressed() {
  fetchCatFact();
}

function fetchCatFact() {
  statusText = "Fetching...";

  loadJSON(
    "https://catfact.ninja/fact",
    (data) => {
      catFact = data.fact || "No fact found.";
      statusText = "Loaded";
    },
    () => {
      catFact = "Could not fetch cat fact. Try again.";
      statusText = "Request failed";
    }
  );
}
