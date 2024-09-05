const Clock_button=document.querySelector(".Clock");
const Timer_button=document.querySelector(".timer")
const third=document.querySelector(".third");
const timer=document.getElementById("timerDisplay");

Clock_button.addEventListener("click",()=>{
  third.style.display="flex";
  timer.style.display="none";
  stopTimer();
  
});

Timer_button.addEventListener("click", ()=> {
  third.style.display="none";
  timer.style.display="flex";
  startTimer();
});

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

let get_time=()=>{
const now = new Date();
let day=now.getDate();
let month=now.getMonth()+1;
let year=now.getFullYear()
let h=now.getHours();
let m=now.getMinutes();
let s=now.getSeconds();
h=checkTime(h);
m=checkTime(m);
s=checkTime(s);
document.getElementById("Date").innerHTML=`Date - ${day}-${month}-${year}`

document.getElementById("Hour").innerHTML=h;
document.getElementById("Minute").innerHTML=m;
document.getElementById("Seconds").innerHTML=s;
setTimeout(get_time, 1000);
}


function startTimer() {
  let duration = 60 * 5; // 5 minutes
  let display = document.getElementById('timerDisplay');
  let timer = duration, minutes, seconds;
  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Initially start with clock
get_time();