const express = require('express');
const app = express();
const http = require("http").Server(app);
// const server=require('http').createServer(app); //equivalent to the line above
// server.listen(3000,'222.205.97.160'); //app.listen([port[, host[, backlog]]][, callback])
//app.listen() is identical to http.listen
const io = require("socket.io")(http);
// const server = app.listen(3000);

//需要用路由器内分配的本机ip，并设置端口 e.g.http://192.168.0.3:3000
const port = process.env.PORT || 3021;//服务器提供的端口

app.use(express.static(__dirname + "/public")); //use public folder which is a static folder
console.log("It works"); //will show in terminal

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

io.sockets.on('connection', newConnection);//set up a connection event
// io.on("connection", newConnection);

http.listen(port, () => console.log("listening on port " + port));
// app.listen(4000); //app.listen() function is identical to Node’s http.Server.listen() method.
