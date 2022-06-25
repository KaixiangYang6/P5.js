const express = require("express");
const app = express();
app.listen(3000,()=>console.log('listening at 3000'));
app.use(express.static(__dirname + "/public")); //provide folder for the client side
app.use(express.json({limit: '1mb'}));
app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
})