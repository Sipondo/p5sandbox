let mic;
let smoothLevel = 0;

function setup() {
    createCanvas(800, 800);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    let level = mic.getLevel();
    smoothLevel = smoothLevel * 0.9 + level * 0.1; // Easing

    let shift = map(smoothLevel, 0, 0.3, 0, 180, true);

    // Horizontal gradient (left to right).
    for (let x = 0; x < width; x += 1) {
        let t = x / (width - 1);
        let r = 30 + t * (230 - 30) + shift;
        let b = 220 + t * (40 - 220) - shift;
        stroke(constrain(r, 0, 255), 120, constrain(b, 0, 255));
        line(x, 0, x, height);
    }

    // Vertical gradient (top to bottom) with alpha to blend.
    for (let y = 0; y < height; y += 1) {
        let t = y / (height - 1);
        let g = 40 + t * (220 - 40) + shift;
        stroke(40 + shift * 0.4, constrain(g, 0, 255), 200 - shift * 0.4, 120);
        line(0, y, width, y);
    }

    fill(0);
    noStroke();
    textSize(16);
    text("Click once to enable audio", 20, 30);
    textSize(13);
    text("Mic level: " + nf(smoothLevel, 1, 3), 20, 50);
}

function mousePressed() {
    userStartAudio();
}

