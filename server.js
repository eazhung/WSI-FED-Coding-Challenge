const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/src/'));
app.use(express.static(__dirname + '/node_modules/milligram/dist'))

// load index page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server on port 80
const server = app.listen(8080, function() {
  console.log('Listening on port %d', server.address().port);
  console.log('Please visit localhost:8080 to visit the project');
});
