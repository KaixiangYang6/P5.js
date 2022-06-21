const port = process.env.PORT || 3021;//my server have to listen to the port that Heroku gives.

const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);


app.use(express.static(__dirname + "/public"));

//heroku features:enable http-session-affinity
//to work with socket io

// socket part

function newConnection(socket) {
  console.log(socket.id);
  socket.on("mouse", mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit("mouse", data);
    //io.sockets.emit("mouse", data); // sends to all

    console.log(data);
  }
}

io.on("connection", newConnection);

http.listen(port, () => console.log("listening on port " + port));



