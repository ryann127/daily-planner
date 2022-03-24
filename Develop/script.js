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

function colorChange() {
    presentTime = moment().format("hhA");

    if (hoursInDay.morning.indexOf(presentTime) !== -1 || hoursInDay.night.indexOf(presentTime) !== -1){
        $(".hourNotes").css("background-color", "#d3d3d3");

    }
    if (hoursInDay.business.indexOf(presentTime) !== -1){
        $("#" + presentTime).css("background-color", "#ff69b4");
    }
    for (var i=0; i < hoursInDay.business.indexOf(presentTime); i++){
        $("#"+presentTime).css("background-color", "#d3d3d3");
    }
    //figure out a way to change color for future hours
}