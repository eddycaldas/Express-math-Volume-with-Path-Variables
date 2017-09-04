
// EXERCISE 03
//Express Math: Volume with Path Variables
const express = require('express')
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000

router.get('/math/volume/:length/:width/:height', function(req, res) {
  var side1 = req.params.length;
  var side2 = req.params.width;
  var side3 = req.params.height;
  res.send('The volume of a ' + side1  + ' x ' + side2  + ' X ' + side3 + ' rectangle is ' + side1 * side2 * side3);
});

app.listen(port);
console.log(`doin some magic here : ${port}`);

app.use('/', router)