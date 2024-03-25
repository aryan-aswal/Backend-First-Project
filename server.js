// step 1: create a folder
// step 2: open it in vs code
// step 3: npm init -y
// step 4: npm i express
// step 5: create server.js file
 

// to intantiate server
const express = require('express');
const app = express();

// used to parse request body in express -> PUT or POST

/* 
body-parser is a middleware for handling HTTP POST requests in Express.js, a qpopular web framework for Node.js. It parses the incoming request body, which is often in JSON or URL-encoded format, and makes it available in the req.body object.When a client sends data to the server through a POST request, the data is typically included in the body of the request. However, by default, Express does not parse the request body, so you need to use a middleware like body-parser to extract and format the data for easier use in your application.
*/

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (request,response)=>{
    response.send("hello world");
})

app.post('/api/cars',(request, response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Established");
}).catch((err)=>{"Error"});

app.listen(8000, ()=>{
    console.log("Server Started");
})
