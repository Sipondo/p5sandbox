    let data;
    let trendValues = [];
    let cycleValues = [];
    let years = [];
    let months = [];
    let days = [];

    function setup() {
    createCanvas(700, 400);
    textFont("sans-serif");
    data = loadJSON("https://global-warming.org/api/co2-api");
    }

    function draw() {
    background(245);

    if (!data) return;

    // Parse data once
    if (trendValues.length === 0) {

        if (!data.hasOwnProperty("co2")){
        return
        }
        
        for (let row of data.co2) {
        let trend = Number(row.trend);
        let cycle = Number(row.cycle);
        let year = Number(row.year);
        let month = Number(row.month);
        let day = Number(row.day); // Use actual day from API

        if (
            !isNaN(trend) &&
            !isNaN(cycle) &&
            !isNaN(year) &&
            !isNaN(month) &&
            !isNaN(day)
        ) {
            trendValues.push(trend);
            cycleValues.push(cycle);
            years.push(year);
            months.push(month);
            days.push(day);
        }
        }
    }

    // Chart layout
    let margin = 60;
    let left = margin;
    let right = width - margin;
    let top = margin;
    let bottom = height - margin;

    // Global min/max
    let allValues = trendValues.concat(cycleValues);
    let minVal = min(allValues);
    let maxVal = max(allValues);

    // Axes
    stroke(0);
    strokeWeight(1);
    line(left, top, left, bottom); // y-axis
    line(left, bottom, right, bottom); // x-axis

    // Trend line (red)
    noFill();
    stroke(200, 0, 0);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < trendValues.length; i++) {
        let x = map(i, 0, trendValues.length - 1, left, right);
        let y = map(trendValues[i], minVal, maxVal, bottom, top);
        vertex(x, y);
    }
    endShape();
    
    // Cycle line (blue)
    noFill();
    stroke(0, 0, 200);
    strokeWeight(1.5);
    beginShape();
    for (let i = 0; i < cycleValues.length; i++) {
        let x = map(i, 0, cycleValues.length - 1, left, right);
        let y = map(cycleValues[i], minVal, maxVal, bottom, top);
        vertex(x, y);
    }
    endShape();

    // Y-axis labels
    noStroke();
    fill(0);
    textSize(12);
    textAlign(RIGHT, CENTER);
    text(nf(maxVal, 0, 1), left - 10, top);
    text(nf(minVal, 0, 1), left - 10, bottom);

    // X-axis labels (sparse)
    let step = floor(years.length / 6);
    textAlign(CENTER, TOP);
    for (let i = 0; i < years.length; i += step) {
        let x = map(i, 0, years.length - 1, left, right);
        text(years[i], x, bottom + 5);
    }

    // Axis titles
    textSize(14);
    textAlign(CENTER);
    text("Year", (left + right) / 2, bottom + 40);

    push();
    translate(left - 50, (top + bottom) / 2);
    rotate(-PI / 2);
    text("CO₂ (ppm)", 0, 0);
    pop();

    // Top-right latest values with full date
    textAlign(RIGHT, TOP);
    fill(0);
    let latestIndex = trendValues.length - 1;
    let latestTrend = trendValues[latestIndex].toFixed(1);
    let latestCycle = cycleValues[latestIndex].toFixed(1);
    let latestYear = years[latestIndex];
    let latestMonth = months[latestIndex];
    let latestDay = days[latestIndex];

    // Full date using actual day
    let latestDate = `${nf(latestDay, 2)}-${nf(latestMonth, 2)}-${latestYear}`;

    text(`Latest Trend: ${latestTrend} ppm`, right, top - 40);
    text(`Latest Cycle: ${latestCycle} ppm`, right, top - 25);
    text(`Date: ${latestDate}`, right, top - 10);

    // Chart title
    textAlign(LEFT, TOP);
    text(
        "Atmospheric CO₂ concentration — Trend (red) vs Cycle (blue)",
        left,
        top - 60
    );
    }
