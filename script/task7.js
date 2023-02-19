"use strict"; 

// Напишіть функцію, яка приймає час (години, хвилини,
// секунди) і виводить його на екран у форматі «година:хвилини:секунди». Якщо при виклику функції хвилини
// та/або секунди не були передані, виводити їх як 00.

const inp10 = document.querySelector (".inp10");
const inp11 = document.querySelector (".inp11");
const inp12 = document.querySelector (".inp12");
const btn7 = document.querySelector ("#btn7");
const res7 = document.querySelector (".res7");

function Time(hours, minutes, seconds) {
    if (!hours) {
      // hours = prompt("Enter hours");
      hours = +inp10.value;
      if (hours > 24) {
        hours = 0;
      }
    }
    if (!minutes) {
      // minutes = prompt("Enter minutes");
      minutes = +inp11.value;
      if (minutes > 60) {
        minutes = 0;
      }
    }
    if (!seconds) {
      // seconds = prompt("Enter seconds");
      seconds = +inp12.value;
      if (seconds > 60) {
        seconds = 0;
      }
    }
  
    hours = hours || "00";
    minutes = minutes || "00";
    seconds = seconds || "00";
  
    let time = `${hours}:${minutes}:${seconds}`;
    return time;
  }
  



  btn7.addEventListener ('click', ()=> {
    let time = Time();
    console.log(time);
    res7.textContent = (time);
    clean (inp10);
    clean (inp11);
    clean (inp12);
    })
    
function clean (clean1) {
clean1.value="";
}


