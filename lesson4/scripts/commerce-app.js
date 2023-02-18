// Making current time and last time variables

const year = document.querySelector("#year");
const lastTime = document.querySelector("#last-time");
const currentTime = document.querySelector("#current");

const options = {year: "numeric"}


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

year.innerHTML = new Date().toLocaleDateString("en-UK", options);

lastTime.innerHTML =  new Date(document.lastModified);

currentTime.innerHTML = `<em>${fulldate}</em>`;

// Making a hamburger menu for small view

function toggleNav() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("new");
    if(document.getElementById("menu").classList.contains("open")) {
        document.querySelector(".test").classList.add("fix-date")
        document.querySelector(".test").classList.remove("burger-date")
    } else{
        document.querySelector(".test").classList.add("burger-date")
        document.querySelector(".test").classList.remove("fix-date")
    }
}

const x = document.getElementById('hamburger')
x.onclick = toggleNav;

// Making a pop-up on top of screen on Mon-Tue

const popUp = document.createElement('p');
popUp.className = 'pop-up';
const header = document.querySelector('header');
let parent = header.parentNode;


// 'August 19, 1975 23:15:30' <-- This can be used to test the function below to see if it checks against "day" properly
const newday = new Date();
const day = newday.getDay();

popUp.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';

function testDay() {
    if (day == '1' || day == '2') {
        parent.insertBefore(popUp, header);
    } else {
    };
};

testDay();