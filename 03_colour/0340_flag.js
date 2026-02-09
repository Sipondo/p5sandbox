function setup() {
    createCanvas(600, 400);
    angleMode(DEGREES);
    
    // Base blue background.
    background(0, 36, 125);

    // Draw from the center for easier rotation.
    translate(width / 2, height / 2);
    rectMode(CENTER);
    noStroke();

    // White diagonals.
    fill(255);
    push();
    rotate(45);
    rect(0, 0, width * 1.6, height * 0.18);
    pop();

    push();
    rotate(-45);
    rect(0, 0, width * 1.6, height * 0.18);
    pop();

    // Red diagonals.
    fill(200, 16, 46);
    push();
    rotate(45);
    rect(0, 0, width * 1.6, height * 0.08);
    pop();

    push();
    rotate(-45);
    rect(0, 0, width * 1.6, height * 0.08);
    pop();

    // White central cross.
    fill(255);
    rect(0, 0, width, height * 0.22);
    rect(0, 0, width * 0.22, height);

    // Red central cross.
    fill(200, 16, 46);
    rect(0, 0, width, height * 0.12);
    rect(0, 0, width * 0.12, height);
}

