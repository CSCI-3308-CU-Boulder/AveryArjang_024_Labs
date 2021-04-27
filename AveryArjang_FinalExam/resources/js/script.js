
function openModal(tArg){
    ModalcardStr = "";
    ModalcardStr += `
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Add Review</h4>
          <button type="button" class="sumbits" data-toggle="button">
            &times;
          </button>
        </div>
        <div class="modal-body" id="modalForms">
          <div class="form-inline">
            <input
              type="text"
              class="form-control"
              placeholder="Movie Name:"
              readonly="true"
            />
            <input
              type="text"
              class="form-control"
              id="movieName"
              placeholder="${tArg}"
              readonly="true"
            />
          </div>
          <div class="form-inline">
            <input
              type="text"
              class="form-control-inline"
              id="review"
              placeholder="Enter you review here:"
              readonly="true"
            />
            <textarea
              class="form-control"
              rows="5"
              placeholder="This is a review"
            ></textarea>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `
  document.getElementById("reviewModal").innerHTML += ModalcardStr;
}

function makeApiCall() {
    var s = document.getElementById("movie").value;

    var url = `https://api.openbrewerydb.org/breweries`; //https://api.openbrewerydb.org/breweries?by_city=san_diego
    $.ajax({ url: url, dataType: "json" }).then(function (data) {
        console.log(data);
        var HTMLcardStr = '';
        var title = "";
        var posterUrl = "";

        for (i = 0; i < 10; i++) {

            //console.log(data.Search[i].Title);
            //title = data.Search[i].Title;

            //posterUrl = data.Search[i].Poster;

            HTMLcardStr += `<div class="card">
                <img class="card-img-top" src= ${by_name} alt="NA">
                    <div class="card-body">
                        <h4 class="card-title">${by_type}</p>
                        <h4 class="card-title">${by_street}</p>
                        <button type = "button" class="btn btn-primary" onClick="openModal('${name}')" data-toggle = "modal" data-target = "#reviewModal">Add Review</button>
                    </div>
            </div>`
        }
        //HTMLcardStr += "</div>";
        document.getElementById("searchresults").innerHTML = HTMLcardStr;
    });
}

function clearImages() {
    document.getElementById("photogallery").innerHTML = "";
    window.scrollTo(0, 0);
}
