let bubbles = [];

let flower;
let kittens = [];

function preload() {
    //变量flower被赋予了一张图片
    flower = loadImage('kittens/flower.png');
    //数组kittens的每一个元素都加载了一张图片
    for (let i = 0; i < 5; i++) {
        kittens[i] = loadImage(`kittens/kitten${i}.jpg`);   //数组kittens的每个元素都分别加载了一张图片
    }
}

function setup() {
    createCanvas(600, 400);
    //创建了10个Bubble类的元素给变量b，并将b添加进了bubbles数组。元素数量可以大于图片数量。
    for (let i = 0; i < 10; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(50, 150);
        // let kitten = random(kittens);    //random可以从数组kittens中随机选择元素
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}

function draw() {
    background(0);
    //将bubbles数组中的每一个元素，都属于Bubble类，所以可以应用Bubble类的运动和显示功能函数。
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor(x, y, r, img) {   //构造4个用于控制的基础参数，和4个基础属性
        this.x = x;
        this.y = y;
        this.r = r;
        //在构造函数内提前给要用在图片显示的image函数定义好内容。自定义的this.kitten等于数组kittens内的任意元素
        this.kitten = random(kittens);  //random可以从数组kittens中随机选择元素
    }

    clicked(px, py) {
        //let d = dist(px, py, this.x, this.y);
        //if (d < this.r) {
        //如果坐标px,py在图片的范围内。为什么这里就知道是图片，因为这里需要结合this.x，this.y都被用于show()功能函数内的图片显示image()，需要结合image()的参数意思。
        if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
            this.kitten = flower; //random(kittens);
        }
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }

    show() {
        image(this.kitten, this.x, this.y, this.r, this.r); //this.kitten等于kittens数组中的随机对象，所以在draw()中显示的是图片
        // stroke(255);
        // strokeWeight(4);
        // fill(this.brightness, 125);
        // ellipse(this.x, this.y, this.r * 2);
    }
}