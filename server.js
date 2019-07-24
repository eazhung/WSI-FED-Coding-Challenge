const express = require('express');
const path = require('path');
// const dataProxy = require('./server/proxy')
// const proxy = require('http-proxy-middleware');

// const URL =
//   'https://www.westelm.com/';


const app = express();
app.use(express.static(__dirname + '/src/'));
app.use(express.static(__dirname + '/node_modules/milligram/dist'))

// load index page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get('/proxy', function(req, res) {
 
// })
// app.use('/proxy', proxy('' , { target: URL, changeOrigin: true }))

// app.get('/proxy', function(req, res) {
//   dataProxy(res)
// });

// app.get('/test*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/public/tests.html'));
// });

// Start the server on port 80
const server = app.listen(8080, function() {
  console.log('Listening on port %d', server.address().port);
  console.log('Please visit localhost:8080 to visit the project');
});
