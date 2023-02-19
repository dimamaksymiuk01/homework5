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
      hours = prompt("Enter hours");
      if (hours > 24) {
        hours = 0;
      }
    }
    if (!minutes) {
      minutes = prompt("Enter minutes");
      if (minutes > 60) {
        minutes = 0;
      }
    }
    if (!seconds) {
      seconds = prompt("Enter seconds");
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
  
  let time = Time();
  console.log(time);