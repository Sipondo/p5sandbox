let uiState = {
  consentGiven: false,
  audioEnabledByUser: false,
  showCloseButton: true
};

function setup() {
  createCanvas(700, 400);
  textFont('monospace');
}

function draw() {
  background(248);

  fill(20);
  textSize(17);
  text('Explicit UI state (anti dark-pattern design)', 20, 35);
  textSize(13);
  text('Press C: consent, A: audio toggle (only after consent), H: hide/show close button', 20, 58);

  drawPanel(30, 90, 300, 220);
  drawPanel(370, 90, 300, 220);

  fill(20);
  text('Manipulative UI (avoid):', 40, 120);
  text('- unclear consent', 40, 150);
  text('- hidden exit', 40, 175);
  text('- auto audio', 40, 200);

  text('Transparent UI state:', 380, 120);
  text('- consentGiven: ' + uiState.consentGiven, 380, 150);
  text('- audioEnabledByUser: ' + uiState.audioEnabledByUser, 380, 175);
  text('- showCloseButton: ' + uiState.showCloseButton, 380, 200);

  if (uiState.showCloseButton) {
    fill(240, 90, 90);
    rect(625, 102, 30, 24, 5);
    fill(255);
    text('X', 636, 119);
  }
}

function drawPanel(x, y, w, h) {
  fill(255);
  stroke(220);
  rect(x, y, w, h, 10);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    uiState.consentGiven = !uiState.consentGiven;
    if (!uiState.consentGiven) uiState.audioEnabledByUser = false;
  }

  if (key === 'a' || key === 'A') {
    if (uiState.consentGiven) {
      uiState.audioEnabledByUser = !uiState.audioEnabledByUser;
    }
  }

  if (key === 'h' || key === 'H') {
    uiState.showCloseButton = !uiState.showCloseButton;
  }
}
