let ball = {    //在JS里，可以创建一个变量本质上是其他变量的容器。通过ball.x使用内部变量
    x: 300,
    y: 200,
    xspeed: 4,
    yspeed: -3
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    move();
    bounce();
    display();
}

//运动模块：原变量=原变量+增量（原坐标+速度值）
function move() {
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
}

//方向模块：碰到边缘后反向运动
function bounce() {
    if (ball.x > width || ball.x < 0) {
        ball.xspeed = ball.xspeed * -1;
    }
    if (ball.y > height || ball.y < 0) {
        ball.yspeed = ball.yspeed * -1;
    }
}

//绘制模块：绘制小球
function display() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(ball.x, ball.y, 24, 24);//控制小球的坐标
}