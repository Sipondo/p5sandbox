function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    
    // Set text properties
    textSize(48); // big text

    let verticalPosition = 100;
    text("Sentence 1", 100, verticalPosition);

    verticalPosition += 50;
    text("Sentence 2", 100, verticalPosition);

    verticalPosition += 50;
    text("Sentence 3", 100, verticalPosition);

    verticalPosition += 50;
    text("Sentence 4", 100, verticalPosition);
    
    verticalPosition += 50;
    text("Sentence 5", 100, verticalPosition);
}

function draw() {
    // No animation needed for this demonstration
}
