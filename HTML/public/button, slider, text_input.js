let bgcolor;
let button;
let slider;
let input;
let nameP;

function setup(){
  canvas = createCanvas(200, 200);
  bgcolor = color(200);
  button = createButton("go go");  //assign an element to a variable
  button.mousePressed(changeColor);  //use mousePressed() method, and execute changeColor(), when mousePress.
  nameP = createP('Your name!');
  slider = createSlider(10, 100, 50);
  input = createInput('type your name');
}

function changeColor(){
  bgcolor = color(random(255));
}

function draw(){
  background(bgcolor);
  fill(255, 100, 135);
  noStroke();
  ellipse(100, 100, slider.value(), slider.value());
  nameP.html(input.value());  //.html更改文本内容
  text(input.value(), 10, 15);
}
