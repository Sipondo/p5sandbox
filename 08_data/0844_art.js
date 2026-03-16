let artData;
let artImage;
let artIndex = 0;

function preload() {
  // Pick a keyword for the museum API search
  let searchTerm = "flowers"; // keyword that is used in the API call

  // Load JSON before setup/draw runs
  artData = loadJSON(
    "https://api.smk.dk/api/v1/art/search/?keys=" +
      searchTerm +
      "&offset=0&rows=1000&lang=en"
  );
}

function setup() {
  createCanvas(700, 600);

  // Alternative strategy: the api is two deep so we need to check if we have received the JSON
  // before we continue loading the image
  if (artData && artData.items && artData.items.length > 0) {
    // image_thumbnail is a direct URL to a small preview image
    let thumbUrl = artData.items[artIndex].image_thumbnail;
    if (thumbUrl) {
      artImage = loadImage(thumbUrl);
    }
  }
}

function draw() {
  // Basic drawing logic
  background(245);
  fill(20);
  textSize(22);
  text("SMK Art API (flowers)", 20, 36);

  // Is the image loaded?
  if (artImage) {
    // Draw the loaded artwork image
    image(artImage, 20, 70, width - 40, height - 90);
  } else {
    // Fallback if there is no thumbnail for this item
    textSize(16);
    text("No thumbnail found for this item.", 20, 80);
  }
}
