
let visit = document.querySelector('#visit');

let today = Date.now();

let oldDate = localStorage.getItem("oldDate");

function compareDate() {
    if (oldDate != 0) {
        let outcome = (oldDate - today) / 84600000;
        outcome = Math.abs(outcome);
        let rounded = Math.round(outcome);
        visit.textContent = "It has been " + rounded + " days since you were here."; 
    };
    
};

compareDate();

localStorage.setItem("oldDate", today);