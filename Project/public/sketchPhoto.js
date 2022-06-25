let webcam;
let button;
// let snapshots = [];
let streamVideo_1;
let streamVideo_2;
let streamVideo_3;
let streamVideo_4;

// let streamVideo_1Array = [];
let counterWebcam = 0;
let total = 60;

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

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);
    webcam = createCapture(VIDEO);
    webcam.size(320, 240);

    //import ESP32Cam via IP address
    streamVideo_1 = createImg('http://192.168.0.105:81/stream', 'the ESP32-Cam_1 Failed ', streamSuccess_1);
    streamVideo_1.hide();
    streamVideo_2 = createImg('http://192.168.0.102:81/stream', 'the ESP32-Cam_2 Failed ', streamSuccess_2);
    streamVideo_2.hide();
    streamVideo_3 = createImg('http://192.168.0.103:81/stream', 'the ESP32-Cam_3 Failed ', streamSuccess_3);
    streamVideo_3.hide();
    streamVideo_4 = createImg('http://192.168.0.104:81/stream', 'the ESP32-Cam_4 Failed ', streamSuccess_4);
    streamVideo_4.hide();


    button = createButton('snap');
    button.mousePressed(takesnap);
}

function takesnap() {
    image(streamVideo_1, 0, 0);


}

function draw() {
    let w = width * 0.5;
    let h = height * 0.5;
    let x = 0;
    let y = height*0.5;

    image(streamVideo_1, x, 0, w, h);
    image(streamVideo_2, width * 0.5, 0, w, h);
    image(streamVideo_3, x, y, w, h);
    image(streamVideo_4, width * 0.5, y, w, h);



}