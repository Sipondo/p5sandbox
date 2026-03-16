let quote = "Click to fetch a quote";
let author = "";
let loading = false;

function setup() {
  createCanvas(900, 460);
  textFont("monospace");
}

function draw() {
  background(244);
  fill(20);
  textSize(20);
  text("API interaction: request on demand", 20, 36);

  textSize(14);
  text("Click anywhere to fetch a new quote", 20, 62);

  if (loading) {
    text("Loading...", 20, 90);
  }

  fill(30, 40, 80);
  rect(20, 110, width - 40, 240, 12);

  fill(255);
  textSize(22);
  textWrap(WORD);
  text('"' + quote + '"', 40, 150, width - 80, 160);

  textSize(16);
  text(author ? "- " + author : "", 40, 320);
}

function mousePressed() {
  loading = true;
  fetch("https://dummyjson.com/quotes/random")
    .then((r) => r.json())
    .then((json) => {
      quote = json.quote;
      author = json.author;
      loading = false;
    })
    .catch(() => {
      quote = "Request failed. Try again.";
      author = "";
      loading = false;
    });
}
