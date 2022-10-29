// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
let canvas;
let socket;

let streamVideo_1;
let streamVideo_2;
let streamVideo_3;
let streamVideo_4;
let webcam;
let streamVideo_1Array = [];
let streamVideo_2Array = [];
let streamVideo_3Array = [];
let streamVideo_4Array = [];


let snapshots_1 = [];
let counterWebcam = 0;
let counterStream_1 = 0;
let counterStream_2 = 0;
let counterStream_3 = 0;
let counterStream_4 = 0;

let buttonWork;
let buttonSlack;
let buttonSnapshot;
let total = 25;
let serverTime;

let go1 = false;
let go2 = false;
let go3 = false;
let go4 = false;

function streamSuccess_1() {
  go1 = true;
  console.log('streamVideo_1 works');
}
function streamSuccess_2() {
  go2 = true;
  console.log('streamVideo_2 works');
}
function streamSuccess_3() {
  go3 = true;
  console.log('streamVideo_3 works');
}

function streamSuccess_4() {
  go4 = true;
  console.log('streamVideo_4 works');
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function preload() {
  streamVideo_1 = createImg('http://192.168.0.101:81/stream', 'the ESP32-Cam_1 Failed ', streamSuccess_1);
  streamVideo_1.id('stream_1');
  streamVideo_1.size(400, 296);
  streamVideo_1.hide();

  streamVideo_2 = createImg('http://192.168.0.102:81/stream', 'the ESP32-Cam_2 Failed ', '/', streamSuccess_2);
  streamVideo_2.id('stream_2');
  streamVideo_2.size(400, 296);
  streamVideo_2.hide();

  // streamVideo_3 = createImg('http://192.168.0.103:81/stream', 'the ESP32-Cam_3 Failed ', '/', streamSuccess_3);
  // streamVideo_3.id('stream_3');
  // streamVideo_3.size(400, 296);
  // streamVideo_3.hide();

  // streamVideo_4 = createImg('http://192.168.0.104:81/stream', 'the ESP32-Cam_3 Failed ', '/', streamSuccess_4);
  // streamVideo_4.id('stream_4');
  // streamVideo_4.size(400, 296);
  // streamVideo_4.hide();

}



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);//windowWidth, windowHeight
  // canvas.position(0, 0);
  background(0);

  // var imgTags = document.getElementById("demo");('stream_1');
  // console.log(imgTags.length);
  // for (i = 0; i < imgTags.length; i++) {
  //   var iframurl = imgTags[i].getAttribute("src");
  //   var iframe = document.createElement('iframe');
  //   iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframurl);
  //   document.body.appendChild(iframe);
  // }

  // webcam = createCapture(VIDEO);//for test
  // webcam.size(width / 8, width * 3 / 8);//320 240 4:3
  // webcam.hide();

  // console.log(streamVideo_1);
  // object . 通过查看对象来选择帧。

  // streamVideo_1 = image(streamVideo_1, 0, 0, 80, 60);
  // streamVideo_1.position(0, 100);

  // streamVideo_1.size(width / 8, width / 8 * 3);



  buttonWork = createButton('Work Hard');
  buttonSlack = createButton('Slack Off');
  buttonSnapshot = createButton('Snapshot');
  buttonFullscreen = createButton('Fullscreen');

  buttonSnapshot.mousePressed(takesnap);

  //set a full screen version to project on the wall
  buttonFullscreen.mousePressed(function () {
    let fullScreen = fullscreen();
    fullscreen(!fullScreen);
  });


  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect(); //send message to a server/IP address

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

  //Serve Time Display
  serverTime = document.getElementById('serverTime');
  // serverTime = createP("");
  // serverTime.style('color', 'white');
  // serverTime.style('font-family', 'system-ui');
  socket.on('time', function (timeString) {
    serverTime.html('Server time: ' + timeString);

    // el.innerHTML = 'Server time: ' + timeString;
  })

}

function takesnap() {
  // snapshots_1.push(webcam.get());  //add streamVideo_1 element to the history_1 array
  streamVideo_1Array.push(streamVideo_1);

}


function draw() {
  //想数组内填充图片序列。
  if (go1) {
    //add images from createImg into an  array
    // streamVideo_1Array[counterStream_1] = image(img, 0, 500);
    streamVideo_1Array[counterStream_1] = streamVideo_1; //需要测试
    counterStream_1++;
    if (counterStream_1 == total) { counterStream_1 = 0; }
  }
  // if (go2) {
  //   //add images from createImg into an  array
  //   // streamVideo_2Array[counterStream_2] = image(img, 0, 500);
  //   streamVideo_1Array[counterStream_2] = streamVideo; //需要测试
  //   counterStream_1++;
  //   if (counterStream_1 == total) { counterStream_1 = 0; }
  // }
  // if (go3) {
  //   //add images from createImg into an  array
  //   // streamVideo_3Array[counterStream_3] = image(img, 0, 500);
  //   streamVideo_1Array[counterStream_3] = streamVideo; //需要测试
  //   counterStream_1++;
  //   if (counterStream_1 == total) { counterStream_1 = 0; }
  // }


  //add images into the array but not display. This is why images initially display one-by-one. 
  if (webcam.loadedmetadata) {//if preload successfully
    // snapshots_1.push(webcam.get());//get fram from webcan<video> ，add it into snapshots_1 array
    snapshots_1[counterWebcam] = webcam.get();//every object in snapshots_1 array is equivalent to a frame

    counterWebcam++;
    if (counterWebcam == total) { counterWebcam = 0; }
  }



  //display the images
  let w = width / 12;
  let h = height / 12;
  let webcamX = 0;
  let webcamY = 0;
  for (var i = 0; i < snapshots_1.length; i++) {
    // var index = (i + frameCount) % snapshots_1.length;
    tint(255, 100);
    image(snapshots_1[i], webcamX, webcamY, w, h);
    webcamX = webcamX + w;
    if (webcamX >= width) {
      webcamX = 0;
      webcamY = webcamY + h;
    }
  }

  let stream_1_X = 0;
  let stream_1_Y = 400;
  for (var i = 0; i < streamVideo_1Array.length; i++) {
    // var index = (i + frameCount) % streamVideo_1Array.length;
    tint(255, 100);
    image(streamVideo_1Array[i], stream_1_X, stream_1_Y, w, h);
    stream_1_X = stream_1_X + w;
    if (stream_1_X >= width) {
      stream_1_X = 0;
      stream_1_Y = stream_1_Y + h;
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