let webcam;
let button;
// let snapshots = [];
let streamVideo_1;
let streamVideo_2;
let streamVideo_3;
let streamVideo_4;

let streamVideo_1Array = [];
let counterWebcam = 0;
let total = 60;

let go = false;
function ready() {
    go = true;
}

function setup() {
    createCanvas(windowWidth, windowHeight - 300);
    background(51);
    webcam = createCapture(VIDEO, ready);
    webcam.size(320, 240);

    streamVideo_1 = createImg('http://192.168.0.101:81/stream', 'the ESP32-Cam_1 Failed ', streamSuccess_1);
    streamVideo_1.size(400, 296);
    // streamVideo.position(0, 0);
    // streamVideo.hide();

    button = createButton('snap');
    button.mousePressed(takesnap);
}

function takesnap() {
    // snapshots.push(webcam.get());
    // streamVideo_1Array.push(streamVideo);
    image(streamVideo_1, 0, 0);
    // streamVideo_1Array.push(streamVideo_Img.get());

}

function draw() {
    // if (go) {
    //     snapshots[counterWebcam] = webcam.get();//every object in snapshots_1 array is equivalent to a frame

    //     counterWebcam++;
    //     if (counterWebcam == total) { counterWebcam = 0; }
    // }
    let w = width * 0.5;
    let h = height * 0.25;
    let x = 0;
    let y = 0;
    // for (var i = 0; i < snapshots.length; i++) {
    //     tint(255, 150);
    //     image(snapshots[i], x, y, w, h);
    //     x = x + w;
    //     if (x >= width) {
    //         x = 0;
    //         y = y + h;
    //     }
    // }

}