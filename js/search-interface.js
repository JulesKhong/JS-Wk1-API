var Search = require('./../js/search.js').searchModule;

var displayResults = function(manufacturer, bikes) {
  $('#searchCriteria').append("Bikes made by " + manufacturer + ":");
  console.log(bikes.bikes);
  // bikes.forEach(function(bike){
  // $('.showResults').append("<li>" + bike + "</li>");
  // });
};

$(document).ready( function() {
  $('#search-man').submit( function(event) {
    event.preventDefault();
    newSearch = new Search();
    var manu = $('#manufacturer').val();
    newSearch.searchManufacturer(manu, displayResults);

  });
});
