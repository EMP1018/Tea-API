const express = require('express');
const app = express(); 
const PORT = process.env.PORT || 9000; 
 
const cors = require('cors'); 

app.use(cors()); 


// This data that will be sent when the /api route is hit
// An object with nested objects
const tea = {
    'oolong': {
        'type': 'black',
        'origin':  'China',
        'waterTemp': 200, 
        'steepTimeSeconds': 180, 
        'caffeineLevel': true, 
        'flavor': 'delicious'
    },
    'matcha': {
        'type': 'green',
        'origin':  'China',
        'waterTemp': 200, 
        'steepTimeSeconds': 180, 
        'caffeineLevel': false, 
        'flavor': 'delicious'
    },
    'unknown': {
        'type': 'unknown',
        'origin':  'unknown',
        'waterTemp': 0, 
        'steepTimeSeconds': 0, 
        'caffeineLevel': false, 
        'flavor': 'unknown'
    }
};


// Server is set up to hear the get request, essentially an event listener)
// Server will send index.html and the directory 
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html'); 
});


// If the /api route is hit, the server will resposnd with some JSON

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase();
    if (tea[teaName]) { 
        response.json(tea[teaName]);
    }
    else {
        response.json(tea['unknown']);
    }
   
}); 

// Server is set up to listen in order to send files 

app.listen(PORT, (request, response) => {
    console.log(`The server is running on port ${PORT}`);
});




