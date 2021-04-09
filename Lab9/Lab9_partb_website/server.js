// Load the modules
var express = require('express'); //Express - a web application framework that provides useful utility functions like 'http'
var app = express();
var bodyParser = require('body-parser'); // Body-parser -- a library that provides functions for parsing incoming requests
app.use(bodyParser.json());              // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));// Set the relative path; makes accessing the resource directory easier

// Simple get api provided to check if the node.js starts up successfully. Opening up http://localhost:3000 should display the below returned json.
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome!" });
});

//Add your code support two new API's /add and /divide here.
app.post("/add", (request, response) => {

  const num1 = request.body.num1;
  const num2 = request.body.num2;

  //check if they're not numbers)
  if (typeof num1 !== "number" || typeof num2 !== "number" ){
    return response.json({status: 404, message: "nope!"});
  }

  const add = (num1, num2) =>{
    return num1+num2;
  }

  response.json({status: "success", message: "welcome!", sum: add(num1,num2)});



});


app.post("/divide", (request, response) => {

  const num1 = request.body.num1;
  const num2 = request.body.num2;

  //check if they're not numbers)
  if (typeof num1 != "number" || typeof num2 != "number" ){
    response.json({status: "fails", message: "not number!"});
    return response

  }
  if(num2 == 0){
    response.json({status: "fails", message: "nope div by 0!"});
    return response
    }

      const div = (num1, num2) =>{
        return (num1/num2);
      }

      response.json({status: "success", message: "welcome!", divide: div(num1,num2) });
      return response


});




module.exports = app.listen(3000);
console.log('3000 is the magic port');
