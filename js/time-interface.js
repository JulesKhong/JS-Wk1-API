$(document).ready(function(){
  $('#time').text(moment());


function update() {
  $('#time').text(moment().format('D. MMMM YYYY H:mm:ss'));
}
setInterval(update, 1000);

  var alarms = [];

  $("#setbutton").click(function(event){
    event.preventDefault();
    var hour = $("#hour").val();
    var ampm = $("#ampm").val();
    var mins = $("#mins").val();
    var time = hour + ":" + mins + " " + ampm;

    alarms.push(time);
    console.log(alarms);
    $("#showalarm").append("<li>" + "Alarm set for " + time + "</li>");
    alarms.forEach(function(alarm){
        if (time === moment().format('LT')) {
        var audio = new Audio('sound.mp3');
        $("#showalarm").text("Wake Up!");
        audio.play();
      }
    });
  });
});
