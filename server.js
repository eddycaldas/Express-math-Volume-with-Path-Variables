
var express = require('express');
var app = express();

app.get('/math/pi', function(request, response) {
  response.send('' + Math.PI)
})



app.listen(8080)