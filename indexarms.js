var status = 0; //0:stop 1:running
var time = 0;
var s, l;





function start() {
    status = 1;
    document.getElementById("startBtn").disabled = true;
    timer();
}

function stop() {
    status = 0;
    document.getElementById("startBtn").disabled = false;
}

function timer() {

    if (time == 6000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Arms/shouler_press.jpg"
        var bd = document.getElementById("bd") // Bg change 
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Shoulder press "
        bd.style.backgroundColor = " #f1f8e9"
        var audio = new Audio('arm/shoulderpress.mp3'); // audio 
        audio.play();
    }


    if (time == 12000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Arms/bend_over_rows.jpg"
        var bd = document.getElementById("bd") // Bg change 
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Bend Over Raises"
        bd.style.backgroundColor = " #e8f5e9"
        var audio = new Audio('arm/bendovercurls.mp3'); // audio 
        audio.play();
    }


    if (time == 18000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Arms/bend_over_raises.jpg"
        var bd = document.getElementById("bd") // Bg change 
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Bendover Raises"
        bd.style.backgroundColor = " #f1f8e9"
        var audio = new Audio('arm/bendoverraise.mp3'); // audio 
        audio.play();
    }


    if (time == 24000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Arms/pushups.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #e8f5e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Pushups"
        var audio = new Audio('arm/pushups.mp3'); // audio 
        audio.play();
    }


    if (time == 27000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Arms/shoulder_taps.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #f1f8e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Shoulder taps "
        var audio = new Audio('arm/shoulder.mp3'); // audio 
        audio.play();
    }


    if (time == 30000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Arms/thigh_taps.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #e8f5e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Thigh Taps"
        var audio = new Audio('arm/thigh.mp3'); // audio 
        audio.play();
    }


    if (time == 33000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Arms/pucnhes.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #f1f8e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Punches "
        var audio = new Audio('arm/punches.mp3'); // audio 
        audio.play();
    }


    if (time == 36000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Arms/rolls.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #e8f5e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Rolls"
        var audio = new Audio('arm/rolls.mp3'); // audio 
        audio.play();
    }
    if (time == 39000) {
 
        window.location.href = 'last.html'
    }







    if (status == 1) {
        setTimeout(function () {
            time++;
            var min = Math.floor(time / 100 / 60);
            var sec = Math.floor(time / 100);
            var mSec = time % 100;

            if (min < 10) {
                min = "0" + min;
            }
            if (sec >= 60) {
                sec = sec % 60;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }

            document.getElementById('timerLabel').innerHTML = min + ":" + sec + ":" + mSec;
            timer();

        }, 10);
    }
}