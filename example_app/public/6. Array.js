let words = ["rainbow", "heart", "purple", "friendship"];
let index = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    fill(255);
    textSize(32);
    text(words[index], 12, 200);
}

function mousePressed(){
    index = index + 1;
    //if (index == 4) index = 0;
    if (index == words.length) index = 0;
}