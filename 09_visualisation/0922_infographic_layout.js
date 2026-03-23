// Data: Copenhagen weather, one week
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let temps = [4, 6, 5, 8, 10, 9, 7];
let rain = [2, 0, 5, 1, 0, 0, 3]; // mm
let sunny = [false, true, false, true, true, true, false];

let animProgress = 0;

function setup() {
  createCanvas(500, 420);
  noStroke();
}

function draw() {
  background(240, 245, 250);
  animProgress = lerp(animProgress, 1, 0.025);

  // --- Header ---
  fill(41, 128, 185);
  rect(0, 0, width, 60);
  fill("white");
  textSize(20);
  textAlign(LEFT, CENTER);
  text("Copenhagen Weather", 20, 22);
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
    fill("white");
    stroke(220);
    strokeWeight(1);
    rect(x, 75, boxW, 60, 8);

    noStroke();
    fill(stats[i].col);
    textSize(22);
    textAlign(CENTER, CENTER);
    text(stats[i].value, x + boxW / 2, 96);
    fill("grey");
    textSize(11);
    text(stats[i].label, x + boxW / 2, 118);
  }

  // --- Temperature line chart ---
  let chartLeft = 50;
  let chartRight = width - 30;
  let chartTop = 160;
  let chartBottom = 260;
  let spacing = (chartRight - chartLeft - 20) / 6;

  fill("black");
  textSize(12);
  textAlign(LEFT, BOTTOM);
  noStroke();
  text("Temperature (°C)", chartLeft, chartTop - 5);

  // Line segments
  stroke(231, 76, 60);
  strokeWeight(2.5);
  let scale = (chartBottom - chartTop) / 12;
  for (let i = 0; i < 6; i++) {
    let x1 = chartLeft + 10 + i * spacing;
    let y1 = chartBottom - temps[i] * animProgress * scale;
    let x2 = chartLeft + 10 + (i + 1) * spacing;
    let y2 = chartBottom - temps[i + 1] * animProgress * scale;
    line(x1, y1, x2, y2);
  }

  // Points + day labels
  noStroke();
  for (let i = 0; i < 7; i++) {
    let x = chartLeft + 10 + i * spacing;
    let y = chartBottom - temps[i] * animProgress * scale;

    // Weather icon colour
    if (sunny[i]) {
      fill(241, 196, 15);
    } else {
      fill(180, 200, 220);
    }
    circle(x, y, 14);

    fill("black");
    textAlign(CENTER, TOP);
    textSize(10);
    text(days[i], x, chartBottom + 5);
  }

  // --- Rain bar chart ---
  let rainTop = 300;
  let rainBottom = 380;
  let rainScale = (rainBottom - rainTop) / 6;

  fill("black");
  textSize(12);
  textAlign(LEFT, BOTTOM);
  text("Rainfall (mm)", chartLeft, rainTop - 5);

  let barW = 30;
  for (let i = 0; i < 7; i++) {
    let x = chartLeft + 10 + i * spacing;
    let h = rain[i] * animProgress * rainScale;

    fill(52, 152, 219, 180);
    rect(x - barW / 2, rainBottom - h, barW, h, 3, 3, 0, 0);

    if (rain[i] > 0) {
      fill("black");
      textSize(9);
      textAlign(CENTER, BOTTOM);
      text(rain[i] + "mm", x, rainBottom - h - 3);
    }

    fill("grey");
    textAlign(CENTER, TOP);
    textSize(10);
    text(days[i], x, rainBottom + 4);
  }

  // Footer
  fill("grey");
  textSize(9);
  textAlign(RIGHT, BOTTOM);
  text("Data: fictional | Made with p5.js", width - 10, height - 5);
}

function mousePressed() {
  animProgress = 0;
}
