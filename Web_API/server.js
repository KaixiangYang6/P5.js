const express = require("express");
const app = express();
app.listen(3000,()=>console.log('listening at 3000'));
app.use(express.static(__dirname + "/public")); //provide folder for the client side

//want this server to be able to understand incoming data as JSON
app.use(express.json({limit: '1mb'}));//put options here to control or limit what is possible in terms of reveiving data.
//http://expressjs.com/en/4x/api.html#express.json

app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;  //
    //the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
    response.json({
        status: 'success',
        latitude: data.lat, //
        longitude: data.lon
    })
})
