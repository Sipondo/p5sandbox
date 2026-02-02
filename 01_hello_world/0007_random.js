function setup() {
    createCanvas(400, 400);
    background(220); // grey background
    strokeWeight(10); // how thick the lines are

    point(random(50, 100), random(100, 200)); // Random point between 50-100 on x axis and 100-200 on y axis
    rect(random(150, 350), random(50, 150), random(50, 150), random(50, 150)); // Random rectangle position and size
}

function draw() {
    // No animation needed for this demonstration
}
