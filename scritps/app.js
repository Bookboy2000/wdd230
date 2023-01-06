const year = document.querySelector("#year");
const lasttime = document.querySelector("#lasttime");


const options = {year: "numeric"}
   
year.innerHTML = new Date().toLocaleDateString("en-UK", options);

lasttime.innerHTML =  new Date(document.lastModified);