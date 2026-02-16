function setup() {
  createCanvas(400, 400);
  textSize(32);
  text("Type something!", 50, 100);
}

function keyPressed() {
  // Run whenever there is a key press event
  clear()
  text("Type something!", 50, 100);
  text('"' + str(key) + '"', 50, 200);
  text(str(keyCode), 50, 300);
  console.log(key, keyCode);
}
