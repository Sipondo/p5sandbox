let bubbleArray = [];

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(235, 244, 255);

  // forEach: apply the same update + draw steps to every bubble.
  bubbleArray.forEach(bubble => {
    bubble.y -= bubble.speed;

    // When a bubble leaves the top, move it back to the bottom.
    if (bubble.y < -bubble.size) {
      bubble.y = height + bubble.size;
      bubble.x = random(width);
    }

    fill(bubble.r, bubble.g, bubble.b, 170);
    circle(bubble.x, bubble.y, bubble.size);
  });
}

function mousePressed() {
  bubbleArray.push(createBubble(mouseX, mouseY)); // Add bubble
}

function createBubble(x, y) {
  return {
    x: x,
    y: y,
    size: random(18, 46),
    speed: random(0.8, 2.4),
    r: random(120, 180),
    g: random(180, 230),
    b: random(230, 255)
  };
}
