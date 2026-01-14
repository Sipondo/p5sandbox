let palette;

function setup() {
  createCanvas(600, 450);
  rectMode(CORNER);

  // Mondrian palette
  palette = {
    white: color(245),
    red: color(220, 0, 0),
    blue: color(0, 90, 180),
    yellow: color(240, 200, 0)
  };
}

function draw() {
  stroke(0);
  strokeWeight(12);

  // Central rectangle size
  let cw = 160;
  let ch = 120;

  // Clamp mouse so rectangle stays on canvas
  let cx = constrain(mouseX - cw / 2, cw*0.5, width - cw*1.5);
  let cy = constrain(mouseY - ch / 2, cw*0.5, height - ch*1.5);

  // Grid lines derived from center rectangle
  let x1 = cx;
  let x2 = cx + cw;
  let y1 = cy;
  let y2 = cy + ch;

  // --- RECTANGLES ---

  // Top-left
  fill(palette.white);
  rect(0, 0, width, height);

  // Top-middle
  fill(palette.blue);
  rect(x1, 0, cw, y1);

  // Middle-left
  fill(palette.red);
  rect(0, y1, x1, ch);

  // Middle-right
  fill(palette.yellow);
  rect(x2, y1, width - x2, ch);

  // Bottom-middle
  fill(palette.yellow);
  rect(x1, y2, cw, height - y2);
}
