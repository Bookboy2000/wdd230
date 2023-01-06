const year = document.querySelector("#year");
const lasttime = document.querySelector("#lasttime");


const options = {year: "numeric"}
   
year.innerHTML = new Date().toLocaleDateString("en-US", options);

lasttime.innerHTML =  new Date(document.lastModified);