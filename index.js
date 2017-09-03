var myFunction = function(request, response) {
  response.send('' + Math.PI)
}


var myMathSumFunction = function(request, response) {
  var sum = 0;
  var n = (request.query.n)
  for (var i = 0; i < n.length; i++) {
    let number = Number(n[i])
    sum += number
  } response.send(sum.toString())
}


var myMathCalculate = function(request, response) {
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

  }


module.exports = myFunction
module.exports = myMathSumFunction
module.exports = myMathCalculate