// /* ================================= 
//   Newsletter form validation
// ==================================== */

const submit = document.getElementById('submit');

const validate = (e) => {
e.preventDefault();
const first = document.getElementById('name1');
const last = document.getElementById('name2')
const emailAddress = document.getElementById('mail');

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

if (first.value === "") {
    alert("Please enter your first name.");
    name1.focus();
    return false;
}

if (last.value === "") {
    alert("Please enter your last name.");
    name2.focus();
    return false;
}

if (emailAddress.value === "") {
    alert("Please enter your email address.");
    mail.focus();
    return false;
}

if (!emailIsValid(emailAddress.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
}
alert("You've been added to the newsletter!");
first.value="";
last.value="";
emailAddress.value="";
}

submit.addEventListener('click', validate);