"use strict"; 
 
//Напишіть функцію, яка вираховує факторіал переданого
//їй числа.
const inp3 = document.querySelector (".inp3");
const btn2 = document.querySelector ("#btn2");
const res1 = document.querySelector (".res1");

function factorial() {
    let n;
    // let n = +prompt("Введіть число:");
    n = +inp3.value;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    alert("Факторіал числа " + n + " дорівнює " + result); 
    res1.textContent = "Факторіал числа " + n + " дорівнює " + result;
 }

    // factorial()

btn2.addEventListener ('click', ()=> {
    factorial();
    clean (inp3);
    })
    
function clean (clean1) {
clean1.value="";
}