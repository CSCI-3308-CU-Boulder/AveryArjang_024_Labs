// Load the modules
var express = require('express'); //Express - a web application framework that provides useful utility functions like 'http'
var app = express();
var bodyParser = require('body-parser'); // Body-parser -- a library that provides functions for parsing incoming requests
app.use(bodyParser.json());              // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies
const axios = require('axios');
const qs = require('query-string');

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));// Set the relative path; makes accessing the resource directory easier


// Home page - DON'T CHANGE
app.get('/', function(req, res) {
  res.render('pages/menu', {
    my_title: "Brewery search",
    items: '',
    error: false,
    message: ''
  });
});

//Options for Brewery



//to request data from API for given search criteria
//TODO: You need to edit the code for this route to search for beer reviews and return them to the front-end
app.post('/get_feed', function(req, res) {
  console.log("request parameters: ", req);
  var title = req.body.title; //TODO: Remove null and fetch the param (e.g, req.body.param_name); Check the NYTimes_home.ejs file or console.log("request parameters: ", req) to determine the parameter names
  var api_key = 'acdef';

  if(title) {
    axios({
      url: `http://api.brewerydb.com/v2/{endpoint}/?key=${title}&api-key=${api_key}`,
        method: 'GET',
        dataType:'json',
      })
      .then(items => {
          console.log(respose.data);//where do I find this for this API

            res.render('pages/menu',{
              my_title: "Brewery Results",
              items: response.data,
              error: false,
              message: 'We got it!'
            })
        })
        .catch(error => {
          console.log(error);
          res.render('pages/menu',{
            my_title: "Brewery Reviews",
            items: '',
            error: true,
            message: error
          })
        });


  }
  else {
    // TODO: Render the home page and include an error message (e.g., res.render(...);); Why was there an error? When does this code get executed? Look at the if statement above
    // Stuck? On the web page, try submitting a search query without a search term

    res.render('pages/menu',{
      my_title: "Brewery Reviews",
      items: '',
      error: true,
      message: 'Sorry we cannot process your request because you didnt input a Brewery'
    })
  }
});


app.listen(3000);
console.log('3000 is the magic port');
