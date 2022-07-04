const port = process.env.PORT || 4000;//my server have to listen to the port that Heroku gives or run locally via 3021 port
// laptop IP address in LAN : Server port ---- 192.168.0.100:4000

const express = require('express'); //trigger the express function
const app = express();  //store the result of express function in a variable called app
//start by loading the http module that is standard with Node.js installations.
const http = require("http");//http module contains the function to create the server.
const server = http.createServer(app);
// const server=require('http').createServer(app); //equivalent to the line above

const io = require("socket.io")(server);

//The special variable __dirname has the absolute path of where the Node.js code is being run.
app.use(express.static(__dirname + "/public")); //use public folder which is a static folder
console.log("It works"); //will show in terminal


// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', newConnection);//set up a connection event
// io.on("connection", newConnection);
function newConnection(socket) {
    console.log('We have a new client: ' + socket.id);//every single new connection to a webserver gets autoatically assigned an ID number for tracking it over time
    socket.on('disconnect', () => console.log('A client disconnected: ' + socket.id));
    
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

//应用程序会启动服务器，并在端口port上侦听连接。监听Heroku的信息
server.listen(port, () => {console.log("listening on port " + port)});
//server.listen(3000,'222.205.97.160'); //app.listen([port[, host[, backlog]]][, callback])
//app.listen() function is identical to Node’s http.Server.listen() method.

//time for test. Emit time to the client html
setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

