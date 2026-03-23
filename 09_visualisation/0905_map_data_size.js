// Danish cities: name, area (km²), population (thousands)
let cities = [
  { name: "Copenhagen", area: 88, pop: 650 },
  { name: "Aarhus", area: 91, pop: 285 },
  { name: "Odense", area: 304, pop: 180 },
  { name: "Aalborg", area: 1144, pop: 120 },
  { name: "Esbjerg", area: 742, pop: 72 },
  { name: "Randers", area: 748, pop: 62 }
];

function setup() {
  createCanvas(500, 420);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(245);

  fill("black");
  textSize(16);
  text("Danish cities: area vs. population", width / 2, 25);

  textSize(10);
  fill("grey");
  text("x = area  |  y = population  |  size & colour = population", width / 2, 44);

  // Chart area
  let leftX = 60;
  let rightX = width - 40;
  let topY = 70;
  let bottomY = 380;

  // Axes
  stroke(200);
  strokeWeight(0.5);
  line(leftX, bottomY, rightX, bottomY);
  line(leftX, topY, leftX, bottomY);

  noStroke();
  fill("grey");
  textSize(10);
  text("Area (km²)", (leftX + rightX) / 2, bottomY + 14);

  for (let i = 0; i < cities.length; i++) {
    let c = cities[i];

    // Map area to x, population to y
    let x = map(c.area, 0, 1200, leftX + 20, rightX - 20);
    let y = map(c.pop, 0, 700, bottomY, topY);

    // Map population to size and colour
    let size = map(c.pop, 60, 650, 20, 70);
    let blue = map(c.pop, 60, 650, 220, 40);

    // Draw circle
    fill(52, 100, blue, 180);
    noStroke();
    circle(x, y, size);

    // Label
    fill("black");
    textSize(11);
    text(c.name, x, y - size / 2 - 6);
  }
}
