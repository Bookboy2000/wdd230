const year = document.querySelector("#year");
const lastTime = document.querySelector("#last-time");


const options = {year: "numeric"}
   
year.innerHTML = new Date().toLocaleDateString("en-UK", options);

lastTime.innerHTML =  new Date(document.lastModified);

function toggleNav() {
    document.getElementsByClassName("menu").classList.toggle("open");
    document.getElementsByClassName("hamburger").classList.toggle("new");
}

const x = document.getElementsByClassName("hamburger")
x.onclick = toggleNav();