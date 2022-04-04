let bubbles = [];
let unicorn;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
  unicorn = new Bubble(400, 200, 10);
}

function draw() {
  background(0);
  // unicorn.x = mouseX;
  // unicorn.y = mouseY;
  // unicorn.show();
  // unicorn.move();

  // if (bubble1.intersects(bubble2)) {
  //   background(200, 0, 100);
  // }
  // for (let i = 0; i < bubbles.length; i++) {
  //   bubbles[i].show();
  //   bubbles[i].move();
  // }
  //以下与以上for循环相同作用
  for (let b of bubbles) { //将bubbles数组中的每个b元素按照顺序执行。b代表数组中的每个元素。用于替换上面for条件里的let i = 0; i < bubbles.length; i++
    b.show();
    b.move();
    let overlapping = false;  //在进行for里的重叠判定之前，先定义一个状态。
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {  //b和other分别代表Bubble数组中的每个元素， 
        overlapping = true;
      }
    }
    if (overlapping) {
      b.changeColor(255);
    } else {
      b.changeColor(0);
    }
    /*以上的逻辑：b和other都是指代bubbles数组中的每个元素，用两个变量指代是为了进行比较。
    当b中的一个元素跟other的每个元素进行是否重合的判定时，会出现即使之前有重合，
    最后一个没有重合，最终被判定为没有重合的情况。*/
  }



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