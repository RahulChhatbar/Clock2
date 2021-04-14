var hidden = false;
window.onload = function display24time() {
    function ttfh(){
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
        var fullTime = hrs + ":" + min + ":" + sec;
        
        document.getElementById("24clock").innerText = fullTime;
        document.getElementById("24clock").textContent = fullTime;
        document.getElementById("reloadm").style.visibility = 'visible';
        setTimeout(display24time,1)
}
ttfh();
}