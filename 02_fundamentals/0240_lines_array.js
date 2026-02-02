function setup() {
    createCanvas(400, 400);
    background(220); // grey background

    // Set text properties
    textSize(48); // big text

    // Define an array of strings
    let sentences = ["Sentence 1", "Sentence 2", "Sentence 3", "Sentence 4", "Sentence 5"];

    // Access array elements by index
    text(sentences[0], 100, 100);
    text(sentences[1], 100, 150);
    text(sentences[2], 100, 200);
    text(sentences[3], 100, 250);
    text(sentences[4], 100, 300);
}

function draw() {
    // No animation needed for this demonstration
}
