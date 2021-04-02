function getNumPhotos() {
    return document.getElementById("numPhotoSel").value;
}

function getFilterTag() {
    return document.getElementById("tags").value;
}


function makeApiCall() {
    var numPhotos = getNumPhotos();
    var filterTag = getFilterTag();

    var url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=64d602a7d5c08c2306305a89eb7096fe&tags=${filterTag}&privacy_filter=1&safe_search=1&extras=&per_page=${numPhotos}&page=&format=json&nojsoncallback=1`;
    $.ajax({ url: url, dataType: "json" }).then(function (data) {
        console.log(data);

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

            HTMLcardStr+= `<div class="card text-center">
                <img class="card-img-top" src="https://live.staticflickr.com/${serverID}/${photoID}_${secret}.jpg" alt="error">
                    <div class="card-body">
                        <p class="card-text">${title}</p>
                    </div>
            </div>`
        }
        HTMLcardStr += "</div>";
        document.getElementById("photogallery").innerHTML = HTMLcardStr;
    })
}

function clearImages() {
    document.getElementById("photogallery").innerHTML = "";
    window.scrollTo(0,0);
}
