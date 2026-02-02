function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    
    // Set text properties
    textSize(48); // big text

    for(let verticalPosition = 100; verticalPosition <= 350; verticalPosition += 50) { // Loop from 1 to 5
        text("Sentence " + verticalPosition, 100, verticalPosition);
    }
}

function draw() {
    // No animation needed for this demonstration
}
