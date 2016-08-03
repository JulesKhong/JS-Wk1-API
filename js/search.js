var apiKey = require('./../.env').apiKey;

function Search() {
}

Search.prototype.searchManufacturer = function(manu, displayResult) {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/non_stolen?page=1&manufacturer=' + manu ).then( function(response) {
    displayResult(manu, response);
  }).fail(function(error) {
    $('#showResults').text(error.responseJSON.message);
  });
};

exports.searchModule = Search;
