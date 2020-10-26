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
    alert("WARNING!!!\n\nPlease enter your first name.");
    name1.focus();
    return false;
}

if (last.value === "") {
    alert("WARNING!!!\n\nPlease enter your last name.");
    name2.focus();
    return false;
}

if (emailAddress.value === "") {
    alert("WARNING!!!\n\nPlease enter your email address.");
    mail.focus();
    return false;
}

if (!emailIsValid(emailAddress.value)) {
    alert("WARNING!!!\n\nPlease enter a valid email address.");
    emailAddress.focus();
    return false;
}
alert(`${name1.value}, you've been added to our monthly newsletter!`);
first.value="";
last.value="";
emailAddress.value="";
}

submit.addEventListener('click', validate);


// /* ================================= 
//   Hamburger menu toggle
// ==================================== */

function toggle() {
    const x = document.getElementById("menu");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  } 