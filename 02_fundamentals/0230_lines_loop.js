function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    
    // Set text properties
    textSize(48); // big text

    let verticalPosition = 100;

    for(let i = 1; i <= 5; i++) { // Loop from 1 to 5
        text("Sentence " + i, 100, verticalPosition);
        verticalPosition += 50;
    }
}

function draw() {
    // No animation needed for this demonstration
}
