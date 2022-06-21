// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
let canvas; 

let socket;
let Load_streamVideo_1;
let streamVideo_1;
let streamVideo_2;
let streamVideo_3;
let webcam;
let buttonWork;
let buttonSlack;
let buttonSnapshot;
let snapshots_1 = [];
let counter = 0;
let total = 70;


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);//windowWidth, windowHeight
  background(0);

  webcam = createCapture(VIDEO);//for test
  webcam.size(width / 8, height / 6);//320 240

  // Creates an <img> element in the DOM with given src and alternate text.
  // let streamVideo_1_Img = createImg('http://192.168.0.101:81/stream', 'the ESP32-Cam Failed ')  
  // streamVideo_1 = createVideo(streamVideo_1_Img);
  // streamVideo_1 = document.createElement("video");
  // streamVideo_1.appendChild(streamVideo_1_Img);

  // streamVideo_1 = image(streamVideo_1, 0, 0, 80, 60);
  // streamVideo_1.position(0, 100);
  // streamVideo_1.size(320, 240);

  buttonWork = createButton('Work Hard');
  buttonSlack = createButton('Slack Off');
  buttonSnapshot = createButton('Snapshot');

  buttonWork.mousePressed(takesnap);


  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://localhost:3000'); //send message to a server/IP address

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
  )
}

function takesnap() {
  snapshots_1.push(webcam.get());  //add streamVideo_1 element to the history_1 array
  // image(streamVideo_1, 0, 0);
  
}

function draw() {
  //add images into the array but not display. This is why images initially display one-by-one. 
  if (webcam.loadedmetadata) {//if preload successfully
    // snapshots_1.push(webcam.get());//get fram from webcan<video> ，add it into snapshots_1 array
    snapshots_1[counter] = webcam.get();//every object in snapshots_1 array is equivalent to a frame
    
    //这里需要试一下，loadimage, preload, get(), getCurrentFrame()怎么样


    counter++;
    if (counter == total) { counter = 0; }
  }

  //display the images
  let w = width / 8;
  let h = height / 6;
  let x = 0;
  let y = 0;
  for (var i = 0; i < snapshots_1.length; i++) {
    // tint(255, 50);
    var index = (i + frameCount) % snapshots_1.length;
    image(snapshots_1[index], x, y, w, h);
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
  }
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