const year = document.querySelector("#year");
const lastTime = document.querySelector("#last-time");


const options = {year: "numeric"}
   
year.innerHTML = new Date().toLocaleDateString("en-UK", options);

lastTime.innerHTML =  new Date(document.lastModified);