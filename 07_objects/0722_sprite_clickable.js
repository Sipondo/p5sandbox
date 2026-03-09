function ensureSpriteFallback() {
  if (typeof Sprite !== 'undefined') return;

  window.Sprite = class {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = '#5f9df7';
    }

    contains(px, py) {
      return px > this.x - this.w / 2 && px < this.x + this.w / 2 && py > this.y - this.h / 2 && py < this.y + this.h / 2;
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
  player = new Sprite(350, 200, 90, 90);
}

function draw() {
  background(248);
  player.draw();

  fill(20);
  textSize(16);
  text('Clickable sprite: click square to toggle color', 20, 30);
}

function mousePressed() {
  if (typeof player.mouse !== 'undefined' && typeof player.mouse.presses === 'function') {
    if (player.mouse.presses()) {
      player.color = player.color === 'orange' ? '#5f9df7' : 'orange';
    }
    return;
  }

  if (player.contains(mouseX, mouseY)) {
    player.color = player.color === 'orange' ? '#5f9df7' : 'orange';
  }
}
