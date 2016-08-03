var Search = require('./../js/search.js').searchModule;

var displayResults = function(manufacturer, results) {
  $('#searchCriteria').append("Bikes made by " + manufacturer + ":");
  console.log(results.bikes);
  results.bikes.forEach(function(bike){
  $('#showResults').append("<div class='col-sm-3 each_bike'><li>" + bike.title +"</li><img src=" + bike.thumb + "></div>");
  });
};

$(document).ready( function() {
  $('#search-man').submit( function(event) {
    event.preventDefault();
    newSearch = new Search();
    var manu = $('#manufacturer').val();
    newSearch.searchManufacturer(manu, displayResults);

  });
});
