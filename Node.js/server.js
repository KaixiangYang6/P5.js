var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("It works"); 

var socket = require('socket.io');//require the socket.io

var io = socket(server);//keep track of inputs and outputs, messages in and out

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', newConnection);//set up a connection event

function newConnection(socket) {
    console.log('We have a new client: ' + socket.id);//every single new connection to a webserver gets autoatically assigned an ID number for tracking it over time
    
    // When this user emits, client side: socket.emit('otherevent',some data);
    socket.on('mouse', mouseMsg);//receive data of 'mouse'

    function mouseMsg(data) {//what is the function of the 'data' in brackets?
        // Data comes in as whatever was sent, including objects
        console.log(data);

        socket.broadcast.emit('mouse', data);//send back out the same message, and call it 'mouse'
        // This is a way to send to everyone including sender
        // io.sockets.emit('message', "this goes to everyone");
        
    }
}