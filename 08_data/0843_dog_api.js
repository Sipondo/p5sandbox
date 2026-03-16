let dogImage;
let statusText = "";

function setup() {
  createCanvas(520, 620);
  // Grab us an initial dog image
  fetchDogImage();
}

function draw() {
  background(245);

  // Bunch of drawing logic
  fill(20);
  textSize(22);
  text("Random Dog Image", 20, 36);

  textSize(14);
  text("Click anywhere to load a new dog", 20, 62);
  text(statusText, 20, 84);

  fill(225);
  rect(20, 110, width - 40, height - 140, 12);

  if (dogImage) {
    image(dogImage, 40, 130, width - 80, height - 180);
  }
}

function mousePressed() {
  // New dog image on mouse press
  fetchDogImage();
}

function fetchDogImage() {
  // Status text while we wait for the response
  statusText = "Fetching...";

  // Init the load request
  loadJSON(
    "https://dog.ceo/api/breeds/image/random",
    (data) => {
      // data.message is the image URL
      loadImage(
        data.message,
        (img) => {
          // Code on success
          dogImage = img;
          statusText = "Loaded";
        },
        () => {
          // Code on image error
          statusText = "Image failed to load";
        }
      );
    },
    () => {
      // Code on request error
      statusText = "Request failed";
    }
  );
}
