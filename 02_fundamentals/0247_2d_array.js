// Define a 2D array (grid)
let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(220);
    fill(0);
    textSize(32);
    
    // Iterate through each row
    for (let row = 0; row < grid.length; row++) {
        // Iterate through each column in the current row
        for (let col = 0; col < grid[row].length; col++) {
            text(grid[row][col], col * 100 + 40, row * 100 + 50);
        }
    }
}
