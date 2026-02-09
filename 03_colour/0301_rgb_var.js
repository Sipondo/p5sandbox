// Define colors as variables using color() constructor
let red = color(255, 0, 0);
let green = color(0, 255, 0);
let blue = color(0, 0, 255);
let cyan = color(0, 255, 255);
let magenta = color(255, 0, 255);
let yellow = color(255, 255, 0);

function setup() {
    createCanvas(400, 400);

    // Black
    background(0); // This is also a colour!
    noStroke();
    
    // Red
    fill(red);
    rect(50, 50, 100, 100);
    
    // Green
    fill(green);
    rect(150, 50, 100, 100);
    
    // Blue
    fill(blue);
    rect(250, 50, 100, 100);
    
    // Cyan (green + blue)
    fill(cyan);
    rect(50, 200, 100, 100);
    
    // Magenta (red + blue)
    fill(magenta);
    rect(150, 200, 100, 100);
    
    // Yellow (red + green)
    fill(yellow);
    rect(250, 200, 100, 100);
}

function draw() {
    // No animation needed for this demonstration
}
