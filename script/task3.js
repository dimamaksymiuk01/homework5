"use strict"; 

// Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149.

const inp4 = document.querySelector (".inp4");
const inp5 = document.querySelector (".inp5");
const inp6 = document.querySelector (".inp6");
const btn3 = document.querySelector ("#btn3");
const res2 = document.querySelector (".res2");


function stringNumber() {
    let n1;
    let n2;
    let n3;
    n1= +inp4.value;
    n2= +inp5.value;
    n3= +inp6.value;
    return Number(`${n1}${n2}${n3}`);
    
  }
  
  btn3.addEventListener ('click', ()=> {
    stringNumber();
    res2.textContent = stringNumber();
    clean (inp4);
    clean (inp5);
    clean (inp6);
    })
    
function clean (clean1) {
clean1.value="";
clean1.value="";
clean1.value="";
}