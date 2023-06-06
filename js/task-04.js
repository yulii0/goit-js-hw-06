const counterValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
let step = 0;
buttonDecrement.addEventListener('click', onBtnDecrementClick);
buttonIncrement.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick (){
    if (step > 0) {  
        step -= 1;
        counterValue.textContent = `${step}`
    }
};
function onBtnIncrementClick (){
    step += 1;
    counterValue.textContent = `${step}`
};
