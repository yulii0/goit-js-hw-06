const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', onInput);


function onInput (evt) {
    console.dir(evt.currentTarget);
    if (evt.currentTarget.value === "") {
        return output.textContent = 'Anonymous';
    } else {
        output.textContent = evt.currentTarget.value;
    }
};

