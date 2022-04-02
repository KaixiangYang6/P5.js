//在nature of code里首章内容里有进一步的关于类的，头文件的讲解
//本文件由无返回值和有返回值两个练习组成
//创建自定义（有返回值）函数的方式
/*function <name> (parameters){
    return（可选）
} */

function setup() {
    createCanvas(600, 400);
    let km = milesToKm(26.3);
    print(km);  //打印结果需要在浏览器开发者页面的Console里查看。
    let km2 = milesToKm(100);
    print(km2);
}

function draw() {
    background(50);

    lollipop(100, 100, 50);//绘制自定义图形
    lollipop(300, 200, 150);
}
//创建自定义函数
function lollipop(x, y, diameter) { //直接自定义局部变量
    fill(0, 200, 255);
    rect(x - 10, y, 20, 150);   //参数与变量相关，不可设为绝对坐标值
    fill(255, 0, 200);
    ellipse(x, y, diameter, diameter);  //参数与变量相关
}

//创建自定义有返回值的函数
function milesToKm(miles) {
    let km = miles * 1.6;
    return km;
}