let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    bubbles.push(new Bubble(random(width), random(height), random(20, 50)));
  }
}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.move();
    bubble.display();
  }
}

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(255); // White
    this.xSpeed = random(-2, 2); // Random horizontal speed
    this.ySpeed = random(-2, 2); // Random vertical speed
  }

  move() {
    this.x += this.xSpeed; // Update x position
    this.y += this.ySpeed; // Update y position
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size); // Draw the bubble
  }
}
