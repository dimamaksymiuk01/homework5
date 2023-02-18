"use strict"; 


// task 1
// Напишіть функцію, яка приймає 2 числа і повертає -1, якщо
// перше менше, ніж друге; 1 - якщо перше більше, ніж друге;
// 0 - якщо числа рівні.

const inp1 = document.querySelector (".inp1");
const inp2 = document.querySelector (".inp2");
const btn = document.querySelector ("#btn");
const res = document.querySelector (".res"); 
let number1;
let number2;
function tonumber () {
    number1 = +inp1.value;
    number2 = +inp2.value;
    if (number1 < number2) {
        res.textContent = "-1";
    }
    if (number1 > number2) {
        res.textContent = "1";
    }
    if (number1 === number2) {
        res.textContent = "0";
    }
    else {
        console.log("");
    }
} tonumber ()
    btn.addEventListener ('click', ()=> {
    tonumber ();
    clean (inp1, inp2);
  })

  function clean (clean1, clean2) {
    clean1.value="";
    clean2.value="";
  }