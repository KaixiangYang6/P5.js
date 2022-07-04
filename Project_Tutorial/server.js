const path = require('path');
const express = require('express');
const WebSocket = require('ws');
const app = express();

const WS_PORT = 8888;   //WS Serverr is listening at 8888. ESP32-CAM connects to WS Server directly
const HTTP_PORT = process.env.PORT || 8000; //other browser clients connects to WS Server through HTTP Server.

const wsServer = new WebSocket.Server({ port: WS_PORT }, () => console.log(`WS Server is listening at ${WS_PORT}`));

let connectedClients = [];//keep all connected clients in the array
//after websocket connection, this function will be invoked.
wsServer.on('connection', (ws, req) => {
    console.log('We have a new client: ' + req.socket.remoteAddress);
    ws.on("message", (data) => {
        if (data.indexOf("WEB_CLIENT") !== -1) {
            connectedClients.push(ws);  //push the new clients into the connectedClients array
            console.log("WEB_CLIENT ADDED");
            return;
        }

        //receive message from any one of the clients
        connectedClients.forEach((ws, i) => {//if there is a message from one of the clients, send it to all cliens.  The forEach(myFunction) method calls a function for each element in an array
            if (connectedClients[i] == ws && ws.readyState === ws.OPEN) { //if one of the clients does not have an opened connection, remove it from connectedClients[].
                ws.send(data);
            } else {
                connectedClients.splice(i, 1); //remove unconnected one from array.
            }
        })
    });
    ws.on("error", (error) => {
        console.error("WebSocket error observed: ", error);
    });
});


app.use(express.static(__dirname + "/public"));
//provide client.html to clients' browser
app.get('/client', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/public/client.html'))
});

//this server need to listen to the HTTP_PORT for the client's HTTP connection which is from desktop, mobile whatever.
app.listen(HTTP_PORT, () => {
    console.log(`HTTP server listening at ${HTTP_PORT}`)
});