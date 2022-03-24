var timeDisplayEl = $("#currentDay");
var presentTime; 
var hoursInDay = {
    morning: ["12AM", "01AM", "02AM", "03AM", "04AM", "05AM", "06AM", "07AM", "08AM"],
    business: ["09AM", "10AM", "11AM", "12PM", "01PM", "02PM", "03PM", "O4PM", "05PM"],
    night: ["06PM", "07PM", "08PM", "09PM", "10PM", "11PM"]
};

// TODO: function to display the time in the jumbotron and update every second
function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss A');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);
colorChange();

function colorChange() {
    presentTime = moment().format("hhA");

    if (hoursInDay.morning.indexOf(presentTime) !== -1 || hoursInDay.night.indexOf(presentTime) !== -1){
        $(".hourNotes").css("background-color", "#d3d3d3");

    }
    if (hoursInDay.business.indexOf(presentTime) !== -1){
        $("#"+presentTime).css("background-color", "#ff69b4");
    }
    for (var i=0; i < hoursInDay.business.indexOf(presentTime); i++){
        $("#"+presentTime).css("background-color", "#d3d3d3");
    }
    //figure out a way to change color for future hours
}

$(".saveBtn").on("click", function(){
    var clickID = $(this).attr("id");
    var textID;
    switch (clickID) {
      case "09AMsave":
        textID = $("#09AM").val();
        localStorage.setItem("09AMtext", textID);
        break;
      case "10AMsave":
        textID = $("#10AM").val();
        localStorage.setItem("10AMtext", textID);
        break;
      case "11AMsave":
        textID = $("#11AM").val();
        localStorage.setItem("11AMtext", textID);
        break;
      case "12PMsave":
        textID = $("#12PM").val();
        localStorage.setItem("12PMtext", textID);
        break;
      case "01PMsave":
        textID = $("#01PM").val();
        localStorage.setItem("01PMtext", textID);
        break;
      case "02PMsave":
        textID = $("#02PM").val();
        localStorage.setItem("02PMtext", textID);
        break;
      case "03PMsave":
        textID = $("#03PM").val();
        localStorage.setItem("03PMtext", textID);
        break;
      case "04PMsave":
        textID = $("#04PM").val();
        localStorage.setItem("04PMtext", textID);
        break;
      case "05PMsave":
        textID = $("#05PM").val();
        localStorage.setItem("05PMtext", textID);
    }
  });

  function loadScheduleData() {
    $("#09AM").text(localStorage.getItem("09AMtext"));
    $("#10AM").text(localStorage.getItem("10AMtext"));
    $("#11AM").text(localStorage.getItem("11AMtext"));
    $("#12PM").text(localStorage.getItem("12PMtext"));
    $("#01PM").text(localStorage.getItem("01PMtext"));
    $("#02PM").text(localStorage.getItem("02PMtext"));
    $("#03PM").text(localStorage.getItem("03PMtext"));
    $("#04PM").text(localStorage.getItem("04PMtext"));
    $("#05PM").text(localStorage.getItem("05PMtext"));
  }

  loadScheduleData();