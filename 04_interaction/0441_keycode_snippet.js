function setup() {
  createCanvas(400, 400);
}

function keyPressed() {
  // Run whenever there is a key press event
  clear()
  text('"' + str(key) + '"', 50, 50);
  text(str(keyCode), 50, 150);
  console.log(key, keyCode);
}
