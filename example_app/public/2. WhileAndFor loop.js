function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);

    /*let x = 0;
    while (x <= width) {
        fill(0, 200, 255);
        ellipse(x, 200, 25, 25);
        x = x + 50;     //循环发生改变并最终破坏布尔条件
    }

    for (let x = 0; x <= width; x += 50){   //在条件内控制循环
        fill(255, 0, 200);
        ellipse(x, 300, 25, 25);
    }*/
    for (let x = 0; x <= width; x += 50) {   //每执行一行x，执行一列y
        for (let y = 0; y <= height; y += 50) {
            fill(random(255), random(255), 255);
            ellipse(x, y, 25, 25);
        }
    }
}