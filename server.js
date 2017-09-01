
var curlify = require('request-as-curl');
var express = require('express');
var app = express();
var x;
var y;

//----------------------------> pi excercise
app.get('/math/pi', function(request, response) {
  response.send('' + Math.PI)
})

app.get('/math/pi', function (request) {
  curlify(request);
})

//------------------------------> math/calculate

app.get('/math/calculate', function(request, response) {
  var num = request.query.operation;
  var x = request.query.x;
  var y = request.query.y;
  var add = '+';
  var multiply = '*';
  var substract = '-';
  var divide = '/';



if (num === 'add' || num === undefined) {
  var answerAdd = Number(x) + Number(y);
  var respAdd = x + ' + ' + y + ' = ' + answerAdd
  response.send(respAdd)
    }
  
if(num === 'multiply') {
  var answerMultiply = Number(x) * Number(y);
  var respMultiply = x + ' * ' + y + ' = ' + answerMultiply
  response.send(respMultiply)
  }
    
if(num === 'substract') {
  var answerSubstract = Number(x) - Number(y);
  var respSubstract = x + ' - ' + y + ' = ' + answerSubstract
  response.send(respSubstract)
  }

if(num === 'divide') {
  var answerDivide = Number(x) / Number(y);
  var respDivide = x + ' / ' + y + ' = ' + answerDivide
  response.send(respDivide)
    }
  })
  
  //------------------------------------>math/sum/post
  app.post('/math/sum', function(request, response) {
    var sum = 0;
    var n = (request.query.n)
    for (var i = 0; i < n.length; i++) {
      let number = Number(n[i])
      sum += number
      console.log(sum);
    }
    response.send(sum.toString()) //----> only on post.
  })
  
  
  


app.listen(8080)

