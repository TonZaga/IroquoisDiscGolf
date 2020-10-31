// /* ================================= 
//   Newsletter form validation
// ==================================== */

const valid = document.getElementById('validation');

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

if (valid) {
valid.addEventListener('click', validate);
}


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

// /* ================================= 
//   Scoring calculator
// ==================================== */

let par = [
    3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 4, 4
];
let totalPAR = document.getElementById("totalPAR");
totalPAR.innerHTML += par.reduce((a, b) => a + b, 0);
// log(`${totalPAR}`);



function getScore() {
    let holes = document.getElementsByClassName("value");
    let totalScore = 0;
    for (i = 0; i < holes.length; i++) {
        totalScore += parseInt(holes[i].value)
    }

    //Changes value color if your score is higher than PAR
    let yourTotal = document.getElementById("yourTotal");
    if (totalScore > totalPAR.innerText){
        yourScore.style.color = "red";
    } else if (totalScore == totalPAR.innerText){
        yourScore.style.color = "black";
    } else {
        yourScore.style.color = "green";
    }

    
    //Makes score visible in UI
    yourTotal.innerHTML = totalScore;
    let totalSum = totalScore - totalPAR.innerText

    if (totalSum > 0){
        yourScore.innerHTML = "(+" + totalSum + ")"
    } else {
        yourScore.innerHTML = "(" + totalSum + ")"
    }
}

