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
    
    // Loop through palette and draw rectangles
    for (let i = 0; i < palette.length; i++) {
        fill(palette[i]);
        
        // Top row positions
        if (i < 3) {
            rect(50 + i * 100, 50, 100, 100);
        } 
        // Bottom row positions
        else {
            rect(50 + (i - 3) * 100, 200, 100, 100);
        }
    }
}

function draw() {
    // No animation needed for this demonstration
}
