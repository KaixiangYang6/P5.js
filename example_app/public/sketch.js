let x,y,r,g,b;

function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    r = random(0, 255);
    g = 0;
    b = random(0, 255);
    x =random(0, 600);
    y = random(0, 400);

    noStroke();
    fill(r,g,b, 100);
    circle(x, y, 24);
}