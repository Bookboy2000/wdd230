const year = document.querySelector("#year");
const lasttime = document.querySelector("#last_time");


const options = {year: "numeric"}
   
year.innerHTML = new Date().toLocaleDateString("en-UK", options);

lasttime.innerHTML =  new Date(document.lastModified);