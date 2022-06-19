let socket;

function setup() {
  createCanvas(400, 400);
  background(0);
  socket = io(); //this needs to change in heroku
  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(255, 0, 0);
  ellipse(data.x, data.y, 50, 50);
}

function mouseDragged() {
  console.log(mouseX + "," + mouseY);

  let data = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", data);

  noStroke();
  fill(150, 0, 230);
  ellipse(mouseX, mouseY, 30, 30);
}
