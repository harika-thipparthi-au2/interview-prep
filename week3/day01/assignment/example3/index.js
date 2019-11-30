var express = require('express');
var app = express();
var request = require('request');

request('http://dummy.restapiexample.com/api/v1/employees', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

app.get('/',function(req,res){
    res.send("hello");
});

app.listen(3000);