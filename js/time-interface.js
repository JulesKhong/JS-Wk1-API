$(document).ready(function(){
  $('#time').text(moment());

  var alarms = [];

  $("#setbutton").click(function(event){
    event.preventDefault();
    var hour = $("#hour").val();
    var ampm = $("#ampm").val();
    var mins = $("#mins").val();
    var time = hour + ":" + mins + " " + ampm;

    alarms.push(time)
    console.log(alarms);
    $("#showalarm").append("<li>" + "Alarm set for " + time + "</li>");
    alarms.forEach(function(alarm){
        if (time === moment().format('LT')) {
        console.log("ALARM!!");
        $("#showalarm").text("Wake Up!");
      }
    });
  });
});
