let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 5; i++) {
        let x = random(width);  //画布宽度内随机
        let y = random(height); //画布高度内随机
        let r = random(10, 50); //自定义大小
        let b = new Bubble(x, y, r);    //创建一个对象，并将参数应用到类的参数上
        bubbles.push(b);    //将属于Bubble类的对象b添加到bubbles数组中
    }
}

// function mousePressed() {    //mouseDragged()
//     let r = random(10, 50);
//     let b = new Bubble(mouseX, mouseY, r);
//     bubbles.push(b);    //向数组内添加对象，添加到末尾
// }
function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {//数组里的每个对象都执行一遍clicked()
        bubbles[i].clicked(mouseX, mouseY);
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {//最初只有一个b在数组内
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = x;//this.x这类变量，相当于占位的，没有实际意义但可充当变量。
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }
    clicked(px, py) {   //创建参数，而不是让mouseX, mouseY这样的全局参与到类里。
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            this.brightness = 255;
            // console.log("CLICKED ON BUBBLE!");
        }
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}


