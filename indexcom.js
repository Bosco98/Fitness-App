var status = 0; //0:stop 1:running
var time = 0;
var As,Ad,s,l;           




function start(){
    status = 1;
    document.getElementById("startBtn").disabled = true;
    timer();
}
function stop(){
    status = 0;
    document.getElementById("startBtn").disabled = false;
}

function timer(){
       //jumping jacks to pushups 
    if(time== 2000){ 
        var imgsvg = document.getElementById("imgsvg")                          // img change 
        imgsvg.src = "comp_work/pushups.jpg"
        var bd = document.getElementById("bd")                   // Bg change 
        var par = document.getElementById("parc")                   // Bg change 
        par.innerHTML="Push ups "
        bd.style.backgroundColor=" #f1f8e9"
        var audio = new Audio('comp/pushups.mp3');                        // audio 
        audio.play();
    }
    //pushups to squats 
    if(time== 8000){ 
        var imgsvg = document.getElementById("imgsvg")                          // img change 
        imgsvg.src = "comp_work/squats.jpg"
        var bd = document.getElementById("bd")                   // Bg change 
        var par = document.getElementById("parc")                   // Bg change 
        par.innerHTML="Squats "
        bd.style.backgroundColor=" #e8f5e9"
        var audio = new Audio('comp/squats.mp3');                        // audio 
        audio.play();
    }
    //shouldertaps
    if(time== 12000){ 
        var imgsvg = document.getElementById("imgsvg")                          // img change 
        imgsvg.src = "comp_work/shoulder_taps.jpg"
        var bd = document.getElementById("bd")                   // Bg change 
        var par = document.getElementById("parc")                   // Bg change 
        par.innerHTML="Shoulder Taps "
        bd.style.backgroundColor=" #f1f8e9"
        var audio = new Audio('comp/shoulder.mp3');                        // audio 
        audio.play();
    }
    
    //thightaps100
    if(time== 15000){ 
        var imgsvg = document.getElementById("imgsvg")                          // img change 
        imgsvg.src = "comp_work/thigh_taps.jpg"
        var bd = document.getElementById("bd")                   // Bg change 
        bd.style.backgroundColor=" #e8f5e9"
        var par = document.getElementById("parc")                   // Bg change 
        par.innerHTML="Thigh taps"
        var audio = new Audio('comp/thigh.mp3');                        // audio 
        audio.play();
    }
    
    //kneeups 
    if(time== 18000){ 
        var imgsvg = document.getElementById("imgsvg")                          // img change 
        imgsvg.src = "comp_work/kneeups.jpg"
        var bd = document.getElementById("bd")                   // Bg change 
        bd.style.backgroundColor=" #f1f8e9"
        var par = document.getElementById("parc")                   // Bg change 
        par.innerHTML="Knee ups"
        var audio = new Audio('comp/kneeups.mp3');                        // audio 
        audio.play();
    }
    
    //climbers100
    if(time== 22000){ 
        var imgsvg = document.getElementById("imgsvg")                          // img change 
        imgsvg.src = "comp_work/climbers.jpg"
        var bd = document.getElementById("bd")                   // Bg change 
        bd.style.backgroundColor=" #e8f5e9"
        var par = document.getElementById("parc")                   // Bg change 
        par.innerHTML="Climbers "
        var audio = new Audio('comp/climbers.mp3');                        // audio 
        audio.play();
    }
    
    //crunches 
    if(time== 26000){ 
        var imgsvg = document.getElementById("imgsvg")                          // img change 
        imgsvg.src = "comp_work/cross_crunches.jpg"
        var bd = document.getElementById("bd")                   // Bg change 
        bd.style.backgroundColor=" #f1f8e9"
        var par = document.getElementById("parc")                   // Bg change 
        par.innerHTML="Crunches"
        var audio = new Audio('comp/crunches.mp3');                        // audio 
        audio.play();
    }
    
    //plankjumps 100
    if(time== 30000){ 
        var imgsvg = document.getElementById("imgsvg")                          // img change 
        imgsvg.src = "comp_work/plank_jumps.jpg"
        var bd = document.getElementById("bd")                   // Bg change 
        bd.style.backgroundColor=" #e8f5e9"
        var par = document.getElementById("parc")                   // Bg change 
        par.innerHTML="Plank jumps"
        var audio = new Audio('comp/plankj.mp3');                        // audio 
        audio.play();
    }
    if(time== 33000){ 
        
        
        window.location.href='last.html'
    }







    if(status == 1){
        setTimeout(function(){
            time++;
            var min = Math.floor(time/100/60);
            var sec = Math.floor(time/100);
            var mSec = time % 100;
               
            if(min < 10) {
                min = "0" + min;
            }
            if(sec >= 60) {
                sec = sec % 60;
            }
            if(sec < 10) {
                sec = "0" + sec;
            }
               
            document.getElementById('timerLabel').innerHTML = min + ":" + sec + ":" + mSec;
            timer();
        }, 10);
    }
}
