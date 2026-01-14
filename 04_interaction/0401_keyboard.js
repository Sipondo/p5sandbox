let x = 200;
let y = 200;
let speed = 5;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    
    // Draw the circle
    fill(0, 255, 0);
    ellipse(x, y, 50, 50);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        x -= speed;
    } else if (keyCode === RIGHT_ARROW) {
        x += speed;
    } else if (keyCode === UP_ARROW) {
        y -= speed;
    } else if (keyCode === DOWN_ARROW) {
        y += speed;
    }
}
