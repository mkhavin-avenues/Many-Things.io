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
    bubble.checkEdges();
    bubble.display();
  }
}

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(random(255), random(255), random(255)); 
    this.xSpeed = random(-2, 2); 
    this.ySpeed = random(-2, 2); 
  }

  move() {
    this.x += this.xSpeed; 
    this.y += this.ySpeed; 
  }

  checkEdges() {
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
      this.changeColor();
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1; 
      this.changeColor();
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size); 
  }
}
