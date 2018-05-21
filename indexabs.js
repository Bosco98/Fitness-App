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

    if (time == 2500) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Abs/jumping_jack.jpg"
        var bd = document.getElementById("bd") // Bg change 
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Jumping jacks"
        bd.style.backgroundColor = " #f1f8e9"
        var audio = new Audio('ab/jumping_jacks.mp3'); // audio 
        audio.play();
    }


    if (time ==5000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Abs/plank_jumps.jpg"
        var bd = document.getElementById("bd") // Bg change 
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Plank Jumps "
        bd.style.backgroundColor = " #e8f5e9"
        var audio = new Audio('ab/plankj.mp3'); // audio 
        audio.play();
    }


    if (time == 8000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Abs/cycling.jpg"
        var bd = document.getElementById("bd") // Bg change 
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Cycling "
        bd.style.backgroundColor = " #f1f8e9"
        var audio = new Audio('ab/cycling.mp3'); // audio 
        audio.play();
    }


    if (time == 12000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Abs/burpees.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #e8f5e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Burpees"
        var audio = new Audio('ab/burpees.mp3'); // audio 
        audio.play();
    }


    if (time == 16000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Abs/plank_crunhes.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #f1f8e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Plank Crunhes "
        var audio = new Audio('ab/plankcru.mp3'); // audio 
        audio.play();
    }


    if (time == 19000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Abs/leg_raises.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #e8f5e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Leg raises"
        var audio = new Audio('ab/legr.mp3'); // audio 
        audio.play();
    }


    if (time == 25000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Abs/cross_crunches.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #f1f8e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Cross Crunches"
        var audio = new Audio('ab/crunches.mp3'); // audio 
        audio.play();
    }


    if (time == 29000) {
        var imgsvg = document.getElementById("imgsvg") // img change 
        imgsvg.src = "Abs/plank.jpg"
        var bd = document.getElementById("bd") // Bg change 
        bd.style.backgroundColor = " #e8f5e9"
        var par = document.getElementById("parc") // Bg change 
        par.innerHTML = "Plank"
        var audio = new Audio('ab/plank.mp3'); // audio 
        audio.play();
    }
    if (time == 32000) {
 
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