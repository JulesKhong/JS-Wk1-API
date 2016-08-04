var apiKey = require('./../.env').apiKey;
var geoApi = require('./../.env').geoApi;
function Search() {
}

Search.prototype.searchManufacturer = function(manu, displayResult) {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/non_stolen?page=1&manufacturer=' + manu ).then( function(response) {
    displayResult(manu, response);
  }).fail(function(error) {
    $('#showResults').text(error.responseJSON.message);
  });
};

Search.prototype.searchStolen = function(zip, radius, displayStolen) {
  page = 1;
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=25&proximity= '+ zip +'&proximity_square=' + radius).then( function(response) {
    displayStolen(zip, radius, response);
  }).fail(function(error) {
    $('#showResults').text(error.responseJSON.message);
  });
};

var page = 1;

Search.prototype.searchNext = function(zip, radius, displayStolen) {
  page += 1;
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page='+ page +'&per_page=25&proximity= '+ zip +'&proximity_square=' + radius).then( function(response) {
    displayStolen(zip, radius, response);
  }).fail(function(error) {
    $('#showResults').text(error.responseJSON.message);
  });
};
Search.prototype.searchPrevious = function(zip, radius, displayStolen) {
  page -= 1;
  $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page='+ page +'&per_page=25&proximity= '+ zip +'&proximity_square=' + radius).then( function(response) {
    displayStolen(zip, radius, response);
  }).fail(function(error) {
    $('#showResults').text(error.responseJSON.message);
  });
};

exports.searchModule = Search;
