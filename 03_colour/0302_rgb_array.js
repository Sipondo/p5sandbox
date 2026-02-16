// p5js can be picky about defining this pre-setup, so we initialise an empty variable first
// and set it to the array in setup()
let palette;

function setup() {
    createCanvas(400, 400);
  
    // Define colors in a palette array
    palette = [
        color(255, 0, 0),    // Red
        color(0, 255, 0),    // Green
        color(0, 0, 255),    // Blue
        color(0, 255, 255),  // Cyan
        color(255, 0, 255),  // Magenta
        color(255, 255, 0)   // Yellow
    ];

    // Black
    background(0); // This is also a colour!
    noStroke();
    
    // Red
    fill(palette[0]);
    rect(50, 50, 100, 100);
    
    // Green
    fill(palette[1]);
    rect(150, 50, 100, 100);
    
    // Blue
    fill(palette[2]);
    rect(250, 50, 100, 100);
    
    // Cyan (green + blue)
    fill(palette[3]);
    rect(50, 200, 100, 100);
    
    // Magenta (red + blue)
    fill(palette[4]);
    rect(150, 200, 100, 100);
    
    // Yellow (red + green)
    fill(palette[5]);
    rect(250, 200, 100, 100);
}

function draw() {
    // No animation needed for this demonstration
}
