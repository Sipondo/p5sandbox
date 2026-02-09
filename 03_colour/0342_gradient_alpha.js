function setup() {
    createCanvas(800, 800);
    noStroke();

    // Horizontal gradient (left to right).
    for (let x = 0; x < width; x += 1) {
        let t = x / (width - 1);
        let r = 30 + t * (230 - 30);
        let b = 220 + t * (40 - 220);
        stroke(r, 120, b);
        line(x, 0, x, height);
    }

    // Vertical gradient (top to bottom) with alpha to blend.
    for (let y = 0; y < height; y += 1) {
        let t = y / (height - 1);
        let g = 40 + t * (220 - 40);
        stroke(40, g, 200, 120);
        line(0, y, width, y);
    }
}

