let socket;

function setup() {
    createCanvas(600, 400);
    background(51);
    // Start a socket connection to the server
    // Some day we would run this server somewhere else
    socket = io.connect('http://localhost:3000');   //send message to the server/ip address
}

function draw() {
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 36, 36);
}