var timeDisplayEl = $("#currentDay");
var presentTime; 
var hoursInDay = {
    morning: ["12AM", "01AM", "02AM", "03AM", "04AM", "05AM", "06AM", "07AM", "08AM"],
    business: ["09AM", "10AM", "11AM", "12PM", "01PM", "02PM", "03PM",  "04PM", "05PM"],
    night: [ "06PM", "07PM", "08PM", "09PM", "10PM", "11PM"]
};

function displayTime() {
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss A');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);
colorChange();

function colorChange() {
    presentTime = moment().format("hhA");
    console.log(presentTime);

    if (hoursInDay.morning.indexOf(presentTime) !== -1 || hoursInDay.night.indexOf(presentTime) !== -1){
        $(".timeSlot").css("background-color", "#aca1a1");
    }
    if (hoursInDay.business.indexOf(presentTime) !== -1){
        $("#"+presentTime).css("background-color", "#ff6961");
       
    }
    for (var i=0; i < hoursInDay.business.indexOf(presentTime); i++){
        $("#" + hoursInDay.business[i]).css("background-color", "#aca1a1");
    }
    for (var i=hoursInDay.business.length-1; i > hoursInDay.business.indexOf(presentTime); i--) {
        $("#" + hoursInDay.business[i]).css("background-color", "#77dd77")
    }
}


//09 AM
var textInput9 = document.getElementById("09AM");
var textOutput9 = document.getElementById("09AM");
var save09AM = document.getElementById("save09AM");

save09AM.addEventListener("click", updateText9);
textInput9.value = localStorage.getItem("09AMtext");

function updateText9() {
    localStorage.setItem("09AMtext", textInput9.value);
    textOutput9.textContent = textInput9.value;
};

//10AM
var textInput10 = document.getElementById("10AM");
var textOutput10 = document.getElementById("10AM");
var save10AM = document.getElementById("save10AM");

save10AM.addEventListener("click", updateText10);
textInput10.value = localStorage.getItem("10AMtext");

function updateText10() {
    localStorage.setItem("10AMtext", textInput10.value);
    textOutput10.textContent = textInput10.value;
}

//11AM
var textInput11 = document.getElementById("11AM");
var textOutput11 = document.getElementById("11AM");
var save11AM = document.getElementById("save11AM");

save11AM.addEventListener("click", updateText11);
textInput11.value = localStorage.getItem("11AMtext");

function updateText11() {
    localStorage.setItem("11AMtext", textInput11.value);
    textOutput11.textContent = textInput11.value;
}

//12PM
var textInput12 = document.getElementById("12PM");
var textOutput12 = document.getElementById("12PM");
var save12PM = document.getElementById("save12PM");

save12PM.addEventListener("click", updateText12);
textInput12.value = localStorage.getItem("12PMtext");

function updateText12() {
    localStorage.setItem("12PMtext", textInput12.value);
    textOutput12.textContent = textInput12.value;
}

//1PM
var textInput01 = document.getElementById("01PM");
var textOutput01 = document.getElementById("01PM");
var save01PM = document.getElementById("save01PM");

save01PM.addEventListener("click", updateText01);
textInput01.value = localStorage.getItem("01PMtext");

function updateText01() {
    localStorage.setItem("01PMtext", textInput01.value);
    textOutput01.textContent = textInput01.value;
}

//2PM
var textInput02 = document.getElementById("02PM");
var textOutput02 = document.getElementById("02PM");
var save02PM = document.getElementById("save02PM");

save02PM.addEventListener("click", updateText02);
textInput02.value = localStorage.getItem("02PMtext");

function updateText02() {
    localStorage.setItem("02PMtext", textInput02.value);
    textOutput02.textContent = textInput02.value;
}

//3PM
var textInput03 = document.getElementById("03PM");
var textOutput03 = document.getElementById("03PM");
var save03PM = document.getElementById("save03PM");

save03PM.addEventListener("click", updateText03);
textInput03.value = localStorage.getItem("03PMtext");

function updateText03() {
    localStorage.setItem("03PMtext", textInput03.value);
    textOutput03.textContent = textInput03.value;
}

//4PM
var textInput04 = document.getElementById("04PM");
var textOutput04 = document.getElementById("04PM");
var save04PM = document.getElementById("save04PM");

save04PM.addEventListener("click", updateText04);
textInput04.value = localStorage.getItem("04PMtext");

function updateText04() {
    localStorage.setItem("04PMtext", textInput04.value);
    textOutput04.textContent = textInput04.value;
}

//5PM
var textInput05 = document.getElementById("05PM");
var textOutput05 = document.getElementById("05PM");
var save05PM = document.getElementById("save05PM");

save05PM.addEventListener("click", updateText05);
textInput05.value = localStorage.getItem("05PMtext");

function updateText05() {
    localStorage.setItem("05PMtext", textInput05.value);
    textOutput05.textContent = textInput05.value;
}