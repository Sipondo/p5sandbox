let orbs = [];

function setup() {
    createCanvas(900, 520);
    noStroke();

    // Build an array of orb objects for the showcase scene.
    for (let i = 0; i < 36; i++) {
        orbs.push(createOrb());
    }
}

function draw() {
    drawBackdrop();

    for (let i = 0; i < orbs.length; i++) {
        let orb = orbs[i];
        updateOrb(orb);
        drawOrb(orb);
    }

    drawTitleCard();
}

function createOrb() {
    return {
        cx: width * 0.5,
        cy: height * 0.5,
        angle: random(TWO_PI),
        speed: random(0.003, 0.018),
        radius: random(35, 260),
        size: random(10, 34),
        hueOffset: random(360),
        wobble: random(8, 36)
    };
}

function updateOrb(orb) {
    orb.angle += orb.speed;
    orb.cx = lerp(orb.cx, mouseX, 0.015);
    orb.cy = lerp(orb.cy, mouseY, 0.015);
}

function drawOrb(orb) {
    let t = frameCount * 0.8;
    let w = sin(t * 0.02 + orb.hueOffset) * orb.wobble;
    let x = orb.cx + cos(orb.angle) * (orb.radius + w);
    let y = orb.cy + sin(orb.angle) * (orb.radius + w);
    let pulse = map(sin(orb.angle * 3 + t * 0.03), -1, 1, 0.65, 1.35);
    let s = orb.size * pulse;

    let r = 120 + sin((orb.hueOffset + t) * 0.02) * 95;
    let g = 120 + sin((orb.hueOffset + t + 90) * 0.02) * 95;
    let b = 120 + sin((orb.hueOffset + t + 180) * 0.02) * 95;

    fill(r, g, b, 70);
    circle(x, y, s * 2.8);
    fill(r, g, b, 180);
    circle(x, y, s);
}

function drawBackdrop() {
    for (let y = 0; y < height; y += 2) {
        let mix = map(y, 0, height, 0, 1);
        let r = lerp(15, 8, mix);
        let g = lerp(22, 44, mix);
        let b = lerp(42, 88, mix);
        stroke(r, g, b);
        line(0, y, width, y);
    }

    noStroke();

    let haloX = lerp(width * 0.5, mouseX, 0.25);
    let haloY = lerp(height * 0.5, mouseY, 0.25);
    fill(70, 160, 255, 28);
    circle(haloX, haloY, 380);
    fill(255, 90, 120, 20);
    circle(width - haloX, height - haloY, 320);
}

function drawTitleCard() {
    fill(255, 245);
    textAlign(LEFT, TOP);
    textSize(48);
    text('Array of Objects', 44, 42);

    fill(190, 215, 255, 220);
    textSize(22);
    text('A moving system built from tiny object rules', 46, 108);

    fill(255, 170);
    textSize(15);
    text('Move the mouse to steer the galaxy', 46, 145);
}
