const year = document.querySelector("#year");
const lastTime = document.querySelector("#last-time");


const options = {year: "numeric"}
   
year.innerHTML = new Date().toLocaleDateString("en-US", options);

lastTime.innerHTML =  new Date(document.lastModified);

function toggleNav() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("new");
}

const x = document.getElementById('hamburger')
x.onclick = toggleNav();