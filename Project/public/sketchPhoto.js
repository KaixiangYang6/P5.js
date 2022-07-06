let webcam;
let button;
let serverTime;
// let snapshots = [];
let streamVideo_1;
let streamVideo_2;
let streamVideo_3;
let streamVideo_4;

let buttonWork;
let buttonSlack;
let buttonSnapshot;

// let streamVideo_1Array = [];
let counterWebcam = 0;
let total = 60;

let go1 = false;
let go2 = false;
let go3 = false;
let go4 = false;

let test = false;

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
    // Start a socket connection to the server
    // Some day we would run this server somewhere else
    socket = io.connect(); //send message to a server/IP address
    //SET UP TITLE
    let h1 = document.getElementsByTagName("h1")
    [0].style.fontSize = "13px";

    let canvas = createCanvas(windowWidth, windowHeight - 300);
    canvas.position(0, 30);
    background('#0D162F');
    // background(0);

    //layout


    // webcam = createCapture(VIDEO);
    // webcam.position(0,1200);
    // webcam.size(320, 240);

    if (test) {
        //import ESP32Cam via IP address
        streamVideo_1 = createImg('http://192.168.0.105:81/stream', 'the ESP32-Cam_1 Failed ', streamSuccess_1);
        streamVideo_1.hide();
        streamVideo_2 = createImg('http://192.168.0.102:81/stream', 'the ESP32-Cam_2 Failed ', streamSuccess_2);
        streamVideo_2.hide();
        streamVideo_3 = createImg('http://192.168.0.103:81/stream', 'the ESP32-Cam_3 Failed ', streamSuccess_3);
        streamVideo_3.hide();
        streamVideo_4 = createImg('http://192.168.0.104:81/stream', 'the ESP32-Cam_4 Failed ', streamSuccess_4);
        streamVideo_4.hide();
    }


    //SET UP BUTTONS
    buttonWork = document.querySelector("#WORK_HARD");
    buttonWork.addEventListener('click', function () {
        console.log('WORK HARD!!!');

    })

    buttonSlack = document.querySelector("#SLACK_OFF");
    buttonSlack.addEventListener('click', function () {
        console.log('SLACK OFF!!!')
    })

    buttonSnapshot = document.querySelector("#SNAPSHOT");
    buttonSnapshot.addEventListener('click', function () {
        console.log('SNAPSHOT')
        takesnap();
        // snapRect = 1;
    })

    buttonFullscreen = document.querySelector("#FULLSCREEN");
    buttonFullscreen.addEventListener('click', function () {
        let fullScreen = fullscreen();
        fullscreen(!fullScreen);
    });

    //Serve Time Display
    serverTime = document.getElementById("serverTime");
    // serverTime = createP("");
    // serverTime.style('color', 'white');
    // serverTime.style('font-family', 'system-ui');
    socket.on('time', function (timeString) {
        serverTime.innerHTML = 'Server time: ' + timeString;

        // el.innerHTML = 'Server time: ' + timeString;
    })

}

let snapRect = false;

function takesnap() {
    // image(streamVideo_1, 0, 0);
    console.log('takesnap');
    snapRect = true;

}



let RectOpacity = 0;
let fadeAmount = 0;

function draw() {
    let w = width * 0.5;
    let h = height * 0.5;
    let x = 0;
    let y = height * 0.5;

    if (test) {
        image(streamVideo_1, x, 0, w, h);
        image(streamVideo_2, width * 0.5, 0, w, h);
        image(streamVideo_3, x, y, w, h);
        image(streamVideo_4, width * 0.5, y, w, h);
    }

    //when the buttonSnapshot is clicked, execute once the if function
    if (snapRect) {
        rectMask(245);
        // for (let i = 0; i < 2; i++) {
        if (RectOpacity <= 0) {
            fadeAmount = 11;
            console.log("fade in 11");
        }
        if (RectOpacity >= 255) {
            fadeAmount = -11;
            console.log("fade out -11");


        }
        noFill();
        stroke(255, RectOpacity);
        strokeWeight(7);
        rect(0, 0, width, height);
        RectOpacity += fadeAmount;
        // }

    }
}

function rectMask(opacity) {
    noFill();
    stroke(13, 22, 47, opacity);
    strokeWeight(8);
    rect(0, 0, width, height);
}
//ik 