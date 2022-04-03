let words = ["rainbow", "heart", "purple", "friendship"];
let index = 0;
let nums = [100, 25, 46, 72];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    fill(255);
    textSize(32);
    text(words[index], 12, 200);

    for (let i = 0; i < 4; i++) {
        stroke(255);
        noFill();
        ellipse(i * 100 + 100, 200, nums[i], nums[i]);
    }

}

function mousePressed() {
    index = index + 1;
    //if (index == 4) index = 0;
    if (index == words.length) index = 0;
}