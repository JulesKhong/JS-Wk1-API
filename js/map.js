var apiKey = "AIzaSyAGZqHCSiz3soGvUCJCZWtJ3gMC50fMuoU";

function Map() {

}
Map.prototype.initMap = function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: 44.540, lng: -78.546},
      zoom: 8
  });
}



// Map.prototype.show = function() {
//   $.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyAGZqHCSiz3soGvUCJCZWtJ3gMC50fMuoU&callback=initMap').then(function(response) {
//   })
// }


exports.mapModule = Map;
