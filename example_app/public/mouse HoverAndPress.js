let on = false;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    if (on) {   //on变量的真假状态转换，由外部的mousePressed函数控制。on作为中间变量，连接起
        background(255, 202, 230);
    } else {
        background(0);
    }
    stroke(255);
    strokeWeight(4);
    noFill();
    if (mouseX > 250 && mouseX < 350 && mouseX) {
        fill(255, 255, 230);
    }else{
        fill(156, 202, 230)
    }
    rectMode(CENTER);
    rect(300, 200, 100, 100);
}

//功能：按下鼠标改变背景，再按一下切换回背景
function mousePressed() {   //当鼠标按下时
    if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) { //鼠标坐标在这个范围内
        on = !on;//在这里 on = !on是一种快速表达，用于转换布尔变量的状态。省略了用if对过去状态进行判定再切换状态
    }
}
