let catImage;

function preload() {
    catImage = loadImage(
        "https://raw.githubusercontent.com/Sipondo/creative-programming-2026/refs/heads/main/lecture_3/media/cat.jpg"
    );
}

function setup() {
    createCanvas(400, 400);
    background(220);
    noStroke();

    // Drawing the image
    image(catImage, 0, 0, width, height);

    // Overlapping shapes on top of the image.
    fill(255, 0, 0, 120);
    ellipse(140, 140, 120, 120);
    fill(0, 0, 255, 120);
    rect(190, 190, 130, 130);

    // Overlap the image again with alpha
    tint(255, 100); // Apply a semi-transparent tint to the image
    image(catImage, 80, 80, 200, 200); // Draw the image again with the tint
}

function draw() {
    // No animation needed for this demonstration
}
