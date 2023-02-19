"use strict"; 
const inp8 = document.querySelector (".inp9");
const btn5 = document.querySelector ("#btn5");
const res5 = document.querySelector (".res5");


function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    return sum === num;
  }

btn5.addEventListener ('click', ()=> {
    let num ;
    num = +inp8.value;
    let result = isPerfectNumber(num);
if (result) {
    res5.textContent = ("Досконале");
}
else {
    res5.textContent = ("Не досконале");
}
    clean (inp8);
    })
    
function clean (clean1) {
clean1.value="";
}