function setup() {
    createCanvas(400, 200);
    background(240);

    // Start with interestingNumber set to 42
    let interestingNumber = 42;

    // Draw the initial value as text
    textSize(36);
    text('interestingNumber: ' + interestingNumber, 20, 60);

    // Reassign to a new value
    interestingNumber = 100; // reassigned

    // Draw the reassigned value below
    text('reassigned to: ' + interestingNumber, 20, 110);
}

function draw() {
    // No animation needed for this demonstration
}
