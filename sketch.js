function setup() {
  createCanvas(600, 400);
  bubble = new Bubble(300, 200, 50); // Single bubble
}

function draw() {
  background(0);
  bubble.display();
}

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(255); // White
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size); // Draw the bubble
  }
}
