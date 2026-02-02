function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    
    // Set text properties
    textSize(48); // big text

    let verticalPosition = 100;

    text("Sentence 1", 100, verticalPosition);
    text("Sentence 2", 100, verticalPosition + 50);
    text("Sentence 3", 100, verticalPosition + 100);
    text("Sentence 4", 100, verticalPosition + 150);
    text("Sentence 5", 100, verticalPosition + 200);
}

function draw() {
    // Static drawing
}
