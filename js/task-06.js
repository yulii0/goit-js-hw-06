const input = document.querySelector('#validation-input');
console.dir(input);

input.addEventListener("blur", evt => {
    console.dir(evt.currentTarget.value.length);
    if (Number(evt.currentTarget.value.trim().length) === Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    } 
    input.classList.add('invalid');
    input.classList.remove('valid');
});

