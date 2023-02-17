
let visit = document.querySelector('#visit');

let today = Date.now();

localStorage.setItem("oldDate", today);

let oldDate = localStorage.getItem("oldDate")

function compareDate() {
    console.log(oldDate);
    console.log(today)
    let outcome = (oldDate - today) / 84600000;
    let rounded = Math.round(outcome);
    visit.textContent = "It has been " + rounded + " days since you were here.";
    console.log(rounded);
};

compareDate();