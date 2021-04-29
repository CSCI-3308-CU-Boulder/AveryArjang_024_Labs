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
  res.render('pages/main', {
    my_title: "Brewery search",
    items: '',
    error: false,
    message: ''
  });
});




//populating the databbase with stuff
var pgp = require('pg-promise')();

const dev_dbConfig = {
	host: 'db',
	port: 5432,
	database: process.env.POSTGRES_DB,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD
};

const isProduction = process.env.NODE_ENV === 'prodution';
const dbConfig = isProduction ? process.env.DATABASE_URL : dev_dbConfig;


if (isProduction){
pgp.pg.defaults.ssl = {rejectUnauthorized: false};
}
const db = pgp(dbConfig);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.post('/reviews', function(req, res) {
    console.log(req.body);
    var name = req.body.Brewery;
    var review = req.body.Review;
    var date = new Date();
    //var player = req.body;
    var insert =
    name +
    "," +
    review +
    "," +
    date

    //var insert_statement = "INSERT INTO brewery_reviewTable"
    //var reviews_query = ("name" + "review" + "date")
    var insertReviews = "INSERT INTO brewery_reviewTable(brewery_name, brewery_review, review_date) VALUES('"+name+"', '"+review+"', '"+date+"') ; ";
    var selectReviews = "SELECT * FROM brewery_reviewTable;";

    db.task('get-everything', task =>{
      return task.batch([
        //task.any(insert_statement),
        task.any(insertReviews),
        task.any(selectReviews),
        //task.any(searchReviews)
      ]);
    })
    .then(function(item){
      res.render('partials/reviews',{
        my_title: "Reviews",
        items: item[1],
        error: false,
        message: ''
      })
    })
    .catch(function(err){
      //console.log('error', err);
      res.render('pages/main',{
        my_title: "Reviews",
        items: '',
        error: true,
        message: ''
      })
  });


  });

  //db.any(query)

//end of db stuff

axios.defaults.baseURL = 'https://api.openbrewerydb.org/breweries/search'
//to request data from API for given search criteria
//TODO: You need to edit the code for this route to search for beer reviews and return them to the front-end

app.post('/get_feed1', function(req, res) {
  //console.log("request parameters: ", req);
  //var title = req.body.title;
  //var Review = req.body.Review;
  //var api_key = 'acdef';
  var title2 = req.query.title2;
  var searchReviews = "SELECT * FROM brewery_reviewTable WHERE brewery_name = '"+title2+"' ;" ;

  db.task('get-everything', task =>{
    return task.batch([

      task.any(searchReviews)
    ]);
  })

});



app.post('/get_feed', function(req, res) {
  //console.log("request parameters: ", req);
  var title = req.body.title;
  var Review = req.body.Review;
  var api_key = 'acdef';


  //API SEARCH
  if(title) {
    axios({
      url: `https://api.openbrewerydb.org/breweries/search.json?query=${title}&api-key=${api_key}`,
      //params: {by_name: '', by_type: '', by_street: ""},
        method: 'GET',
        dataType:'json',
      })
      .then(items => {
          //console.log(items.data); //where do I find this for this API response.data?

            res.render('pages/main',{
              my_title: "Brewery Results",
              items: items.data, //this is what im missing for a correct word here
              error: false,
              message: 'We got it!'
            })
        })
        .catch(error => {
          //console.log(error);
          res.render('pages/main',{
            my_title: "Brewery Reviews",
            items: '',
            error: true,
            message: 'error 404'
          })
        });
      }

  else {
    // TODO: Render the home page and include an error message (e.g., res.render(...);); Why was there an error? When does this code get executed? Look at the if statement above
    // Stuck? On the web page, try submitting a search query without a search term

    res.render('pages/main',{
      my_title: "Brewery Reviews",
      items: '',
      error: true,
      message: 'Sorry we cannot process your request because you didnt input a Brewery'
    })
  }
});



//app.listen(3000);
//console.log('3000 is the magic port');

//app.listen(3000);
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
