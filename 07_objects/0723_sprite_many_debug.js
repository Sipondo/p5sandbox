function ensureSpriteFallback() {
  if (typeof Sprite !== 'undefined') return;

  window.Sprite = class {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = '#72b28a';
      this.vx = random(-1.8, 1.8);
      this.vy = random(-1.8, 1.8);
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < this.w / 2 || this.x > width - this.w / 2) this.vx *= -1;
      if (this.y < this.h / 2 || this.y > height - this.h / 2) this.vy *= -1;
    }

    draw() {
      fill(this.color);
      noStroke();
      rectMode(CENTER);
      rect(this.x, this.y, this.w, this.h, 6);
    }
  };
}

let actors = [];
let score = 0;
let debugState = 'running';

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
  ensureSpriteFallback();

  for (let i = 0; i < 12; i++) {
    actors.push(new Sprite(random(40, width - 40), random(70, height - 30), 28, 28));
  }
}

function draw() {
  background(244);

  for (let i = 0; i < actors.length; i++) {
    actors[i].update();
    actors[i].draw();
  }

  fill(20);
  textSize(14);
  text('Mini debug panel', 20, 24);
  text('sprites: ' + actors.length, 20, 46);
  text('score: ' + score, 20, 68);
  text('state: ' + debugState, 20, 90);
  text('Click any actor to remove it', 20, 112);
}

function mousePressed() {
  for (let i = actors.length - 1; i >= 0; i--) {
    let actor = actors[i];
    let inside = mouseX > actor.x - actor.w / 2 && mouseX < actor.x + actor.w / 2 && mouseY > actor.y - actor.h / 2 && mouseY < actor.y + actor.h / 2;
    if (inside) {
      actors.splice(i, 1);
      score += 1;
      if (actors.length === 0) debugState = 'complete';
      return;
    }
  }
}
