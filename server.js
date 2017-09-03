
var curlify = require('request-as-curl');
var express = require('express');
var app = express();
var x;
var y;


app.get('/math/pi', function(request, response) {
  response.send('' + Math.PI)
})

app.get('/math/pi', function (request, response) {
  curlify(request);
})


  
  


app.listen(8080)


