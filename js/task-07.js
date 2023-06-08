const textInputControl = document.querySelector('#font-size-control');
const nextElm = textInputControl.nextElementSibling;
const textChange = nextElm.nextElementSibling;

textInputControl.addEventListener('input', textControl);
function textControl(evt) {
    textChange.style.fontSize = `${evt.currentTarget.value}px`;
    }


// Version 2

// const textInputControl = document.querySelector('#font-size-control');
// const span = document.querySelector('#text');

// textInputControl.addEventListener('input', textControl);
// function textControl(evt) {
//     span.style.fontSize = `${evt.currentTarget.value}px`;
//     }
