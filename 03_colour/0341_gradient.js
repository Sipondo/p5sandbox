function setup() {
    createCanvas(800, 800);
    noStroke();

    let step = 20;
    for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
            let tx = x / (width - 1);
            let ty = y / (height - 1);
            let r = 40 + tx * (220 - 40);
            let b = 220 + ty * (40 - 220);
            fill(r, 120, b);
            rect(x, y, step, step);
        }
    }
}

