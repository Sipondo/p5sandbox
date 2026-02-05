let symmetry = 12;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}


function draw() {
    strokeWeight(5);

    translate(width / 2, height / 2);

    let lineStartX = mouseX - width / 2;
    let lineStartY = mouseY - height / 2;
    let lineEndX = pmouseX - width / 2;
    let lineEndY = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        rotate(360 / symmetry);

        push();
        scale(1, -1);
        line(lineStartX, lineStartY, lineEndX, lineEndY);
        pop();
      }
  }
}
