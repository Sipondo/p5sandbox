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

    if ((mouseX > width / 2) && (mouseY > height / 2)) {
        // If mouse bottom right
        // AND true -> green circle
        fill(0, 200, 0);
        circle(width / 2, height / 2, 120);
    } else if ((mouseX > width / 2) || (mouseY > height / 2)) {
        // Not bottom right; if mouse bottom left or top right
        // OR true (but AND false) -> orange rectangle
        fill(255, 140, 0);
        rect(width / 2, height / 2, 120, 80);
    } else {
        // Neither true -> neutral grey circle
        fill(150);
        circle(width / 2, height / 2, 80);
    }
}
