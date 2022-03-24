var timeDisplayEl = $("#currentDay");
var projectDisplayEl = $("#project-display");
var projectModalEl = $("#project-modal");
var projectFormEl = $("#project-form");
var projectNameInputEl = $("#project-name-input");
var projectTypeInputEl = $("#project-type-input");
var hourlyRateInputEl = $("#hourly-rate-input");
var dueDateInputEl = $("#due-date-input");


// TODO: function to display the time in the jumbotron and update every second
function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);