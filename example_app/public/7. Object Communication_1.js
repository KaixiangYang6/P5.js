let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200);
  bubble2 = new Bubble(400, 200, 100);
}

function draw() {
  background(0);

  if (bubble1.intersects(bubble2)) {
    background(200, 0, 100);
  }

  bubble1.show();
  bubble2.show();
  bubble1.move();
  //bubble2.move();
  bubble2.x = mouseX;
  bubble2.y = mouseY;
}

class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  intersects(other) {   //这里相当于默认如果填写的是个对象，将自动使用它的属性参数
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;    //这里本身是在判断大小，会产生真假也就是true和false，所以无需再用if。这里需不需要加括号？？？
    // if (d < this.r + other.r) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}