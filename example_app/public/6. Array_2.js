let bubbles = [];

function setup() {
    createCanvas(600, 400);
    /*
    for (let i = 0; i < 20; i++) {
        let x = random(width);  //画布宽度内随机
        let y = random(height); //画布高度内随机
        let r = random(10, 40); //自定义大小
        bubbles[i] = new Bubble(x, y, r);    //创建多个对象，并将参数应用到类的参数上

    }*/
}

function mousePressed(){    //mouseDragged()
    let r = random(10, 50);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);    //向数组内添加对象，添加到末尾
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;//this.x这类变量，相当于占位的，没有实际意义但可充当变量。
        this.y = y;
        this.r = r;
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}


