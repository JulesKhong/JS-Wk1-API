var Temperature = require('./../js/temperature.js').tempModule;

var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#temp').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var myTemp = new Temperature(response.main.temp);
      var unit = $('#unit').val();
      if (unit === "celsius") {
        var temp = Math.floor(myTemp.celsius());
      }
      else {
        var temp = Math.floor(myTemp.fahrenheit());
      }
      $('.showTemperature').text("The temperature in " + city + " is " + temp + " degrees " + unit);
    });
    // .fail(function(error) {
    //   $('.showWeather').text(error.responseJSON.message);
    // });
  });
});
