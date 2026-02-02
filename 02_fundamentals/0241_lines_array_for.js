function setup() {
    createCanvas(400, 400);
    background(220); // grey background

    // Set text properties
    textSize(48); // big text

    // Define an array of strings
    let sentences = ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4", "Sentence 5"];

    // Use a for loop to iterate through the array
    for (let i = 0; i < sentences.length; i++) {
        text(sentences[i], 100, 100 + i * 50);
    }
}

function draw() {
    // No animation needed for this demonstration
}
