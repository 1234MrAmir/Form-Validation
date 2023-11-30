let Name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let validUser = false;
let validEmail = false;
let validNumber = false;


Name.addEventListener('blur', () => {
    const regex = /^[A-za-z]([a-zA-Z0-9]){2,10}$/;
    let str = Name.value;
    if (regex.test(str)) {
        Name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        Name.classList.add('is-invalid');
        validUser = false;
    }
})

number.addEventListener('blur', () => {
    const numberRegex = /^([0-9]){10}$/;
    let string = number.value;
    if (numberRegex.test(string)) {
        number.classList.remove('is-invalid');
        validNumber = true;
    }
    else {
        number.classList.add('is-invalid');
        validNumber = false;
    }
})

email.addEventListener('blur', () => {
    const emailRegex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.-zA-Z0-9]+)\.([a-zA-Z]){2,8}$/;
    let emailString = email.value;
    if (emailRegex.test(emailString)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (validUser && validEmail && validNumber) {
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }
    console.log('click on the sunbmit button');
})