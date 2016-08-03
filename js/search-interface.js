var Search = require('./../js/search.js').searchModule;

var displayResults = function(manufacturer, results) {
  $('#searchCriteria').text("Bikes made by " + manufacturer + ":");
  console.log(results.bikes);
  $('#showResults').empty();
  results.bikes.forEach(function(bike){
    if (bike.thumb){
      $('#showResults').append("<div class='col-sm-3 each_bike'><img src=" + bike.thumb + "><div class='li-div'><li>" + bike.title +"</li></div></div>");
    }
  });
};

var displayStolen = function(zip, radius, results) {
  $('#searchCriteria').text('There are  ' + results.bikes.length + ' bikes stolen within ' + radius + ' miles of the zipcode ' + zip + '.');
  $('#showResults').empty();
  results.bikes.forEach(function(bike) {
    if (bike.thumb){
      $('#showResults').append("<div class='col-sm-3 each_bike'><img src=" + bike.thumb + "><div class='li-div'><li>" + bike.title +"</li></div></div>");
    }
  });
};

$(document).ready( function() {

  var newMap = new Map();
  newMap.initMap();
  $('#search-man').submit( function(event) {
    event.preventDefault();
    newSearch = new Search();
    var manu = $('#manufacturer').val();
    newSearch.searchManufacturer(manu, displayResults);
    $('#map').append(newMap);
  });
  $('#search_stolen').submit( function(event) {
    event.preventDefault();
    newArea = new Search();
    var radius = parseInt($('#radius').val());
    var zip = parseInt($('#zip').val());
    newArea.searchStolen(zip, radius, displayStolen);
  });
});
