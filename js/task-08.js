const logInForm = document.querySelector('.login-form');

logInForm.addEventListener('submit', onSubmit);
function onSubmit(evt){
    evt.preventDefault();
    const message = "Заповни всі поля!";
    const {email,password} = evt.currentTarget.elements;
    if (email.value === "" || password.value === "") {
    alert(message);
    return;
    }
        const userData = {
            email : email.value,
            password : password.value
        };
        console.log(userData);
        logInForm.reset();  
}

