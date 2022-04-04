let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 5; i++) {
        let x = random(width);  //画布宽度内随机
        let y = random(height); //画布高度内随机
        let r = random(10, 50); //自定义大小
        let b = new Bubble(x, y, r); //创建一个对象，并将自定义的参数应用到类的原参数上
        bubbles.push(b);    //将属于Bubble类的对象b添加到bubbles数组中
    }
}

function mousePressed() {
    for (let i = bubbles.length - 1; i >= 0; i--) {//在splice删除数组中的对象时，倒序删除可以避免，因为删除前一个，后一个向前补位而被错过的bug
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles.splice(i, 1); //splice删除从第i个起的1个对象。注意
        }//注意调用push，splice这种默认函数时，是对对象应用，
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {//最初只有一个b在数组内
        if (bubbles[i].contains(mouseX, mouseY)) {
            bubbles[i].changeColor(255);
        }else{
            bubbles[i].changeColor(0);
        }
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
    changeColor(bright) {
        this.brightness = bright;
    }

    contains(px, py) { //对鼠标是否进入到圆圈里进行判定，返回真假。
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
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


