function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(240);

    // Show current mouse coordinates
    fill(0);
    textSize(32);
    text('mouseX: ' + mouseX, 10, 50);
    text('mouseY: ' + mouseY, 10, 100);

    // Store conditions in variables
    let inRightHalf = mouseX > width / 2;
    let inBottomHalf = mouseY > height / 2;

    let andCondition = inRightHalf && inBottomHalf; // both true
    let orCondition = inRightHalf || inBottomHalf;  // one or both true

    // Show the stored boolean results
    text('inRightHalf: ' + inRightHalf, 10, 250);
    text('inBottomHalf: ' + inBottomHalf, 10, 300);
    text('AND (inRightHalf && inBottomHalf): ' + andCondition, 10, 400);
    text('OR  (inRightHalf || inBottomHalf): ' + orCondition, 10, 450);

    // Use stored booleans in the conditionals
    if (andCondition) {
        fill(0, 200, 0);
        circle(width / 2, height / 2, 120);
    } else if (orCondition) {
        fill(255, 140, 0);
        rect(width / 2, height / 2, 120, 80);
    } else {
        fill(150);
        circle(width / 2, height / 2, 80);
    }
}
