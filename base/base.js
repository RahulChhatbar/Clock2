window.addEventListener('DOMContentLoaded');
var hidden = false;
    function tfhs(){
        var dates = new Date();
        var hrss = dates.getHours();
        var mins = dates.getMinutes();
        var secs = dates.getSeconds();
        var mss = dates.getMilliseconds();
        var ap = "AM"
        if (hrss == 0){
            hrss = 12;
        }
        if (hrss >= 12){
            hrss -= 12;
            ap = "PM";
        }
        if (hrss < 10){
            hrss = '0' + hrss;
        }
        if (mins < 10){
            mins = "0" + mins;
        }
        if (secs < 10){
            secs = '0' + secs;
        }
        var fullTimes = hrss + ":" + mins + ":" + secs + ":" + mss + " " + ap;
        
        document.getElementById("12clock").innerText = fullTimes;
        document.getElementById("12clock").textContent = fullTimes;
        document.getElementById("24clock").style.visibility = 'hidden';
        document.getElementById("24clock").style.position = 'absolute';
        document.getElementById("reloadm").style.visibility = 'visible';
        setTimeout(tfhs, 1)
}

    function tfh(){
        var date = new Date();
        var hrs = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var ms = date.getMilliseconds();
        if (hrs < 10){
            hrs = '0' + hrs;
        }
        if (min < 10){
            min = "0" + min;
        }
        if (sec < 10){
            sec = '0' + sec;
        }
        var fullTime = hrs + ":" + min + ":" + sec + ":" + ms;
        
        document.getElementById("24clock").innerText = fullTime;
        document.getElementById("24clock").textContent = fullTime;
        document.getElementById("12clock").style.visibility = 'hidden';
        document.getElementById("12clock").style.position = 'absolute';
        document.getElementById("analog").style.position = 'absolute';
        document.getElementById("analog").style.visibility = 'hidden';
        setTimeout(tfh, 1)
}
document.getElementById("analog").innerHTML = 
            '<div class="clock">'+
            '<div class="hand hour" data-hour-hand></div>'+
            '<div class="hand minute" data-minute-hand></div>'+
            '<div class="hand second" data-second-hand></div>'+
            '<div class="number number1">1</div>'+
            '<div class="number number2">2</div>'+
            '<div class="number number3">3</div>'+
            '<div class="number number4">4</div>'+
            '<div class="number number5">5</div>'+
            '<div class="number number6">6</div>'+
            '<div class="number number7">7</div>'+
            '<div class="number number8">8</div>'+
            '<div class="number number9">9</div>'+
            '<div class="number number10">10</div>'+
            '<div class="number number11">11</div>'+
            '<div class="number number12">12</div>'+
            '</div>'

function analogclock(){
setInterval(setClock, 1)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
const currentDate = new Date()
const secondsRatio = currentDate.getSeconds() / 60
const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
setRotation(secondHand, secondsRatio)
setRotation(minuteHand, minutesRatio)
setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
element.style.setProperty('--rotation', rotationRatio * 360)
}
}