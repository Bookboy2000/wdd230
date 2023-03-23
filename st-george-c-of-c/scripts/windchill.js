const tempElement = document.querySelector('#temp');
const speed = document.querySelector('#speed');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#description')
let chill = document.querySelector('#chill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=saint george,ut,us&appid=5928f7cf482059dc544f74fe665b00a2&units=imperial'

async function fetchApi() {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);  
}

fetchApi();

function displayWeather(weather) {
    console.log(weather)
    tempValue = `${weather.main.temp.toFixed(0)}&#8457;`;
    speedValue = `${weather.wind.speed.toFixed(2)}mph`;

    tempElement.innerHTML = tempValue;
    speed.innerHTML = speedValue

    const iconSrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    const desc = weather.weather[0].description;

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', desc)
    description.innerHTML = desc

    displayWindchill(tempValue, speedValue);
}

function displayWindchill(tempValue, speedValue) {
    tempValue = parseInt(tempValue);
    speedValue = parseInt(speedValue);

    if ((tempValue <= 50) && (speedValue > 3)) {
        calculateChill(tempValue, speedValue);
    } else {
        console.log(tempValue, speedValue)
    };
};

function calculateChill(tempValue, speedValue) {
    windChill = parseInt(35.74 + 0.6215 * tempValue - 35.75 * speedValue ** 0.16 +0.4275 * tempValue * speedValue ** 0.16)
    chill.innerHTML = `Feels like:${windChill}&#8457;`;
};