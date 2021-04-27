//Make a Flickr API Request with Ajax and Jquery
/*
$(document).ready(function() {
        var url ='cfb982dcda181d290bbf029505058d46'; //Place your Flickr API Call Here
        $.ajax({url:url, dataType:"json"}).then(function(data) {

        })
      })
      */

//Display Flickr image Data

$(document).ready(function() {
        var url = 'https://api.openbrewerydb.org/breweries?by_city=san_diego &tags= ' + filterTag + '  &privacy_filter=1&safe_search=1&extras=&per_page= '+numPhotos+' &page=&format=json&nojsoncallback=1'; //Place your Flickr API Call Here
        $.ajax({url:url, dataType:"json"}).then(function(data) {
          console.log(data);//Review all of the data returned
          console.log("Image title: " + data.current.title);//View Image title
        })
      })

function makeApiCall() {
    var numPhotos = getNumPhotos();
    var filterTag = getFilterTag();

    var photoID;
    var serverID;
    var secret;
    var title;
    var HTMLcardStr = "";
    for (i = 0; i < numPhotos; i++) {
        photoID = data.photos.photo[i].id;
        serverID = data.photos.photo[i].server;
        secret = data.photos.photo[i].secret;
        title = data.photos.photo[i].title;
      }
    }


function clearImages() {
    document.getElementById("photogallery").innerHTML = "";
    window.scrollTo(0,0);
  }
