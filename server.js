
var curlify = require('request-as-curl');
var express = require('express');
var app = express();
var x;
var y;

myFunction = require('./index.js')
myMathSumFunction = require('./index.js')
myMathCalculate = require('./index.js')

app.get('/math/pi', myFunction)

app.get('/math/pi', function (request) {
  curlify(request);
})

app.get('/math/calculate', myMathCalculate)

app.post('/math/sum', myMathSumFunction)
  
  


app.listen(8080)


