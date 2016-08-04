var Search = require('./../js/search.js').searchModule;
var Map = require('./../js/map.js').mapModule;

var displayResults = function(manufacturer, results) {
  console.log(results.bikes);
  $('#showResults').empty();
  results.bikes.forEach(function(bike){
    if (bike.thumb){
      $('#showResults').append("<div class='col-sm-3 each_bike'><img src=" + bike.thumb + "><div class='li-div'><li>" + bike.title +"</li></div></div>");
    }
    $('#searchCriteria').text("Bikes made by " + manufacturer + ":");
  });
};

var displayStolen = function(zip, radius, results) {
  $('#showResults').empty();
  results.bikes.forEach(function(bike) {
    if (bike.thumb){
      $('#showResults').append("<div class='col-sm-3 each_bike'><img src=" + bike.thumb + "><div class='li-div'><li>" + bike.title +"</li></div></div>");
    }
    $('#searchCriteria').text('There are  ' + results.bikes.length + ' bikes stolen within ' + radius + ' miles of the zipcode ' + zip + '.');
  });
};

// var displayNext = function() {
//   $('#showResults').empty();
//   results.bikes.forEach(function(bike) {
//     if (bike.thumb){
//       $('#showResults').append("<div class='col-sm-3 each_bike'><img src=" + bike.thumb + "><div class='li-div'><li>" + bike.title +"</li></div></div>");
//     }
//   });
// };

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

  $('#search-location').submit(function(event){
    event.preventDefault();
    var search = $('#current-location').val();
    // var newMap = new Map();
    newMap.initialize(search);
  });

  $('#search_stolen').submit( function(event) {
    event.preventDefault();
    newArea = new Search();
    var radius = parseInt($('#radius').val());
    var zip = parseInt($('#zip').val());
    newArea.searchStolen(zip, radius, displayStolen);
    $('#next').show();
    $('#next').click(function(event){
      $('#previous').show();
      event.preventDefault();
      newSearch = new Search();
      newSearch.searchNext(zip, radius, displayStolen);
    });
    $('#previous').click(function(event){
      event.preventDefault();
      newSearch = new Search();
      newSearch.searchPrevious(zip, radius, displayStolen);
    });
  });
});
