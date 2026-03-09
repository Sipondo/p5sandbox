function ensureSpriteFallback() {
  if (typeof Sprite !== 'undefined') return;

  window.Sprite = class {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = '#5f9df7';
      this.mouse = { presses: () => false };
    }

    draw() {
      fill(this.color);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.w, this.h, 8);
    }
  };
}

let player;

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
  ensureSpriteFallback();
  player = new Sprite(width / 2, height / 2, 60, 60);
}

function draw() {
  background(245);
  player.draw();

  fill(20);
  textSize(16);
  text('Sprite setup: one actor object on canvas', 20, 30);
}
