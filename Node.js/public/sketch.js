// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
let socket;

function setup() {
  createCanvas(640, 480);//windowWidth, windowHeight
  background(0);
  
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://localhost:4000'); //send message to a server/IP address

  // We make a named event called 'mouse' and write an anonymous callback function
  socket.on('mouse',
    // When we receive data
    function (data) {
      console.log("Got: " + data.x + " " + data.y);//这里的data继承了发送过来的data的构造参数值。
      // Draw a blue circle
      fill(0, 0, 255);
      noStroke();
      ellipse(data.x, data.y, 20, 20);
    }
  );
}

function draw() {
}

function mouseDragged() {
  // Draw some white circles
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  // Send the mouse coordinates
  sendmouse(mouseX, mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);

  // Make a little object with x and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse', data);    //因为只能发送一个变量，所以需要把x,y多个变量装进一个data变量里。
}