function ensureSpriteFallback() {
  if (typeof Sprite !== 'undefined' && typeof kb !== 'undefined') return;

  window.Sprite = class {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = '#f47c48';
    }

    draw() {
      fill(this.color);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.w, this.h, 8);
    }
  };

  window.kb = {
    pressing: (name) => {
      if (name === 'left') return keyIsDown(LEFT_ARROW);
      if (name === 'right') return keyIsDown(RIGHT_ARROW);
      if (name === 'up') return keyIsDown(UP_ARROW);
      if (name === 'down') return keyIsDown(DOWN_ARROW);
      return false;
    }
  };
}

let player;

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
  ensureSpriteFallback();
  player = new Sprite(350, 220, 52, 52);
}

function draw() {
  background(247);

  if (kb.pressing('left')) player.x -= 3;
  if (kb.pressing('right')) player.x += 3;
  if (kb.pressing('up')) player.y -= 3;
  if (kb.pressing('down')) player.y += 3;

  player.x = constrain(player.x, 26, width - 26);
  player.y = constrain(player.y, 26, height - 26);

  player.draw();

  fill(20);
  textSize(16);
  text('Sprite control with minimal code (arrow keys)', 20, 30);
}
