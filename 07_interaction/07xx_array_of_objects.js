let balls = [];

function setup() {
    createCanvas(400, 400);
    
    // Create multiple ball objects
    for (let i = 0; i < 5; i++) {
        balls.push({
            x: random(width),
            y: random(height),
            speedX: random(-2, 2),
            speedY: random(-2, 2),
            size: random(20, 40)
        });
    }
}

function draw() {
    background(220);
    
    // Update and draw each ball
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        
        // Draw the ball
        fill(0, 100, 200);
        ellipse(ball.x, ball.y, ball.size, ball.size);
        
        // Move the ball
        ball.x += ball.speedX;
        ball.y += ball.speedY;
        
        // Bounce off edges
        if (ball.x < 0 || ball.x > width) {
            ball.speedX *= -1;
        }
        if (ball.y < 0 || ball.y > height) {
            ball.speedY *= -1;
        }
    }
}
