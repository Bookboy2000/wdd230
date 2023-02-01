const year = document.querySelector("#year");
const lastTime = document.querySelector("#last-time");
const currentTime = document.querySelector("#current");
console.log("year")

const options = {year: "numeric"}


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

year.innerHTML = new Date().toLocaleDateString("en-UK", options);

lastTime.innerHTML =  new Date(document.lastModified);

currentTime.innerHTML = `<em>${fulldate}</em>`;



function toggleNav() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("hamburger").classList.toggle("new");
    if(document.getElementById("menu").classList.contains("open")) {
        document.querySelector(".test").classList.add("fix-date")
        document.querySelector(".test").classList.remove("burger-date")
    } else{
        console.log("hello")
        document.querySelector(".test").classList.add("burger-date")
        document.querySelector(".test").classList.remove("fix-date")
    }
}

const x = document.getElementById('hamburger')
x.onclick = toggleNav;