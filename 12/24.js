var hidden = false;
window.onload = function display24time() {
    function ttfh(){
        var date = new Date();
        var hrs = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var ap = "AM";
        if (hrs == 0) {
            hrs = 12;
        }
        if (hrs >= 12) {
            hrs = hrs - 12;
            ap = "PM";
        }
        if (hrs < 10){
            hrs = '0' + hrs;
        }
        if (min < 10){
            min = "0" + min;
        }
        if (sec < 10){
            sec = '0' + sec;
        }
        var fullTime = hrs + ":" + min + ":" + sec + " " + ap;
        
        document.getElementById("24clock").innerText = fullTime;
        document.getElementById("24clock").textContent = fullTime;
        document.getElementById("reloadm").style.visibility = 'visible';
        setTimeout(display24time,1)
}
ttfh();
}