const form = document.querySelector('.login-form')
form.addEventListener("submit", evt => {
    evt.preventDefault();
    const email = form.querySelector('[name="email"]');
    const password = form.querySelector('[name="password"]');
    let User = {};
    if (email.value && password.value) {
        User = {
            email: email.value.trim(),
            password: password.value.trim(),
        };
        console.log(User);
        form.reset();
     } else alert(`All form fields must be filled in`);
    
});
