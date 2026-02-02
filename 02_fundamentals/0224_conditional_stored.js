function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(240);

    // Show current mouse coordinates
    fill(0);
    textSize(32);
    text('mouseX: ' + mouseX + '  mouseY: ' + mouseY, 10, 20);
    // Store conditions in variables
    let inRightHalf = mouseX > width / 2;
    let inBottomHalf = mouseY > height / 2;

    let andCondition = inRightHalf && inBottomHalf; // both true
    let orCondition = inRightHalf || inBottomHalf;  // one or both true

    // Show the stored boolean results
    text('inRightHalf: ' + inRightHalf, 10, 60);
    text('inBottomHalf: ' + inBottomHalf, 10, 80);
    text('AND (inRightHalf && inBottomHalf): ' + andCondition, 10, 110);
    text('OR  (inRightHalf || inBottomHalf): ' + orCondition, 10, 130);

    // Use stored booleans in the conditionals
    if (andCondition) {
        fill(0, 200, 0);
        ellipse(width - 60, 60, 40);
    } else if (orCondition) {
        fill(255, 140, 0);
        rect(width - 90, 40, 60, 40);
    } else {
        fill(150);
        ellipse(width - 60, 60, 30);
    }
}
