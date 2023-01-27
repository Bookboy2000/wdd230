const year = document.querySelector("#year");
const lastTime = document.querySelector("#last-time");
const currentTime = document.querySelector("#current");


const options = {year: "numeric"}


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

year.innerHTML = new Date().toLocaleDateString("en-UK", options);

lastTime.innerHTML =  new Date(document.lastModified);

currentTime.innerHTML = `<em>${fulldate}</em>`;



function toggleNav() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("new");
}

const x = document.getElementById('hamburger')
x.onclick = toggleNav();