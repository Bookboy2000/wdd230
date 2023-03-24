// Javascript for the index.html page

const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#desc');
const tempElement = document.querySelector('#temp');
const humidity = document.querySelector('#humidity');
const dayImg1 = document.querySelector('#day-1');
const dayTemp1 = document.querySelector('#temp-day-1');
const dayImg2 = document.querySelector('#day-2');
const dayTemp2 = document.querySelector('#temp-day-2');
const dayImg3 = document.querySelector('#day-3');
const dayTemp3 = document.querySelector('#temp-day-3');

currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad,ca,us&appid=5928f7cf482059dc544f74fe665b00a2&units=imperial';
forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=oceanside,ca,us&appid=5928f7cf482059dc544f74fe665b00a2&units=imperial';

async function fetchApis() {
    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();
    
    const forcastResponse = await fetch(forcastUrl);
    const forcastData = await forcastResponse.json();

    display(currentData, forcastData);

    console.log(currentData);
    console.log(forcastData);
}

fetchApis()

function display(current, forcast) {
    const iconSrc = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
    const desc = current.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc);

    description.innerHTML = desc
    tempElement.innerHTML = `${current.main.temp.toFixed(0)}&#8457;`;
    humidity.innerHTML = current.main.humidity;

    const forcastIcon1 = `https://openweathermap.org/img/w/${forcast.list[0].weather[0].icon}.png`;
    const forcastDesc1 = forcast.list[0].weather[0].description;

    dayImg1.setAttribute('src', forcastIcon1);
    dayImg1.setAttribute('alt', forcastDesc1)

    dayTemp1.innerHTML = `${forcast.list[0].main.temp.toFixed(0)}&#8457;`;
}