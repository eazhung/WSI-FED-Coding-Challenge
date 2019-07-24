const request = require('request');
// var requestProxy = require("express-request-proxy");

const URL =
  'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';

// module.exports = (req, res, next) =>
//   https.get(url, response => {
//     console.log(response.data)
//     return response.pipe(res)
//   }).on('error', next);

module.exports = (res) => {
  request(URL, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); 
  response.pipe(res)
});
}