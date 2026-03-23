// Data: Copenhagen weather, one week
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let temps = [4, 6, 5, 8, 10, 9, 7];
let rain = [2, 0, 5, 1, 0, 0, 3]; // mm
let wind = [15, 10, 20, 12, 8, 5, 18]; // km/h
let sunny = [false, true, false, true, true, true, false];

let animProgress = 0;

function setup() {
  createCanvas(500, 420);
}

function draw() {
  background(240, 245, 250);
  animProgress = lerp(animProgress, 1, 0.025);

  // --- Header ---
  noStroke();
  fill(41, 128, 185);
  rect(0, 0, width, 60);
  fill(255);
  textSize(20);
  textStyle(BOLD);
  textAlign(LEFT, CENTER);
  text("Copenhagen Weather", 20, 22);
  textStyle(NORMAL);
  textSize(12);
  text("Week of March 16 – 22, 2026", 20, 44);

  // --- Key stat boxes ---
  let avgTemp = 0;
  let totalRain = 0;
  let sunnyDays = 0;
  for (let i = 0; i < 7; i++) {
    avgTemp += temps[i];
    totalRain += rain[i];
    if (sunny[i]) sunnyDays++;
  }
  avgTemp = round(avgTemp / 7, 1);

  let stats = [
    { label: "Avg temp", value: avgTemp + "°C", col: color(231, 76, 60) },
    { label: "Total rain", value: totalRain + " mm", col: color(52, 152, 219) },
    { label: "Sunny days", value: sunnyDays + " / 7", col: color(241, 196, 15) },
  ];

  let boxW = 140;
  let boxGap = 15;
  let boxX = (width - (boxW * 3 + boxGap * 2)) / 2;
  for (let i = 0; i < stats.length; i++) {
    let x = boxX + i * (boxW + boxGap);
    fill(255);
    stroke(220);
    strokeWeight(1);
    rect(x, 75, boxW, 60, 8);

    noStroke();
    fill(stats[i].col);
    textSize(22);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(stats[i].value, x + boxW / 2, 96);
    textStyle(NORMAL);
    fill(100);
    textSize(11);
    text(stats[i].label, x + boxW / 2, 118);
  }

  // --- Temperature line chart ---
  let chartLeft = 50;
  let chartRight = width - 30;
  let chartTop = 160;
  let chartBottom = 260;

  fill(50);
  textSize(12);
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM);
  noStroke();
  text("Temperature (°C)", chartLeft, chartTop - 5);
  textStyle(NORMAL);

  // Grid
  stroke(210);
  strokeWeight(0.5);
  for (let t = 0; t <= 12; t += 4) {
    let y = map(t, 0, 12, chartBottom, chartTop);
    line(chartLeft, y, chartRight, y);
    noStroke();
    fill(150);
    textSize(9);
    textAlign(RIGHT, CENTER);
    text(t, chartLeft - 5, y);
    stroke(210);
    strokeWeight(0.5);
  }

  // Line
  noFill();
  stroke(231, 76, 60);
  strokeWeight(2.5);
  beginShape();
  for (let i = 0; i < 7; i++) {
    let x = map(i, 0, 6, chartLeft + 10, chartRight - 10);
    let y = map(temps[i] * animProgress, 0, 12, chartBottom, chartTop);
    vertex(x, y);
  }
  endShape();

  // Points + day labels
  for (let i = 0; i < 7; i++) {
    let x = map(i, 0, 6, chartLeft + 10, chartRight - 10);
    let y = map(temps[i] * animProgress, 0, 12, chartBottom, chartTop);

    // Weather icon
    if (sunny[i]) {
      fill(241, 196, 15);
    } else {
      fill(180, 200, 220);
    }
    noStroke();
    circle(x, y, 14);

    fill(50);
    textAlign(CENTER, TOP);
    textSize(10);
    text(days[i], x, chartBottom + 5);
  }

  // --- Rain bar chart ---
  let rainTop = 300;
  let rainBottom = 380;

  fill(50);
  textSize(12);
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM);
  noStroke();
  text("Rainfall (mm)", chartLeft, rainTop - 5);
  textStyle(NORMAL);

  let barW = 30;
  for (let i = 0; i < 7; i++) {
    let x = map(i, 0, 6, chartLeft + 10, chartRight - 10);
    let h = map(rain[i] * animProgress, 0, 6, 0, rainBottom - rainTop);

    fill(52, 152, 219, 180);
    noStroke();
    rect(x - barW / 2, rainBottom - h, barW, h, 3, 3, 0, 0);

    if (rain[i] > 0) {
      fill(50);
      textSize(9);
      textAlign(CENTER, BOTTOM);
      text(rain[i] + "mm", x, rainBottom - h - 3);
    }

    fill(100);
    textAlign(CENTER, TOP);
    textSize(10);
    text(days[i], x, rainBottom + 4);
  }

  // Footer
  fill(180);
  textSize(9);
  textAlign(RIGHT, BOTTOM);
  text("Data: fictional | Made with p5.js", width - 10, height - 5);
}

function mousePressed() {
  animProgress = 0;
}
