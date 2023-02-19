"use strict"; 

// Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. Якщо у функцію передали 1 
// параметр, вона вираховує площу квадрата.

const inp7 = document.querySelector (".inp7");
const inp8 = document.querySelector (".inp8");
const btn4 = document.querySelector ("#btn4");
const res4 = document.querySelector (".res4");


function square (length, width) {
    if (length && width) {
        let area = length * width;
        console.log(area);
        res4.textContent = area;
    }
    else if (length) {
        let areaL = length * length;
        console.log(areaL);
        res4.textContent = areaL;
    }
    else if (width) {
        let areaW = width * width;
        console.log(areaW);
        res4.textContent = areaW;
    }
    else {
        console.log("error");
    }
} 
btn4.addEventListener ('click', ()=> {
    let length;
    let width;
    length = +inp7.value;
    width = +inp8.value;
    square (length, width);
    clean (inp7);
    clean (inp8);
    })
    
function clean (clean1) {
clean1.value="";
clean1.value="";
}