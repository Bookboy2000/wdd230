// Javascript for the index.html page

const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#desc');
const tempElement = document.querySelector('#temp');
const humidity = document.querySelector('#humidity');
const dayImg1 = document.querySelector('#day-1');
const dayTemp1 = document.querySelector('#temp-day-1');
const dayWeek1 = document.querySelector('#day-of-week-1');
const dayImg2 = document.querySelector('#day-2');
const dayTemp2 = document.querySelector('#temp-day-2');
const dayWeek2 = document.querySelector('#day-of-week-2');
const dayImg3 = document.querySelector('#day-3');
const dayTemp3 = document.querySelector('#temp-day-3');
const dayWeek3 = document.querySelector('#day-of-week-3');

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

    description.innerHTML = desc;
    tempElement.innerHTML = `${current.main.temp.toFixed(0)}&#8457;`;
    humidity.innerHTML = current.main.humidity;

    const forcastIcon1 = `https://openweathermap.org/img/w/${forcast.list[6].weather[0].icon}.png`;
    const forcastDesc1 = forcast.list[6].weather[0].description;
    dayImg1.setAttribute('src', forcastIcon1);
    dayImg1.setAttribute('alt', forcastDesc1);
    dayTemp1.innerHTML = `${forcast.list[6].main.temp.toFixed(0)}&#8457;`;
    const d1 = new Date(forcast.list[6].dt_txt);
    let day1 = d1.getDay();
    let dayName1 = getDayName(day1);
    dayWeek1.innerHTML = dayName1;

    const forcastIcon2 = `https://openweathermap.org/img/w/${forcast.list[14].weather[0].icon}.png`;
    const forcastDesc2 = forcast.list[14].weather[0].description;
    dayImg2.setAttribute('src', forcastIcon2);
    dayImg2.setAttribute('alt', forcastDesc2);
    dayTemp2.innerHTML = `${forcast.list[14].main.temp.toFixed(0)}&#8457;`;
    const d2 = new Date(forcast.list[14].dt_txt);
    let day2 = d2.getDay();
    let dayName2 = getDayName(day2);
    dayWeek2.innerHTML = dayName2;

    const forcastIcon3 = `https://openweathermap.org/img/w/${forcast.list[22].weather[0].icon}.png`;
    const forcastDesc3 = forcast.list[2].weather[0].description;
    dayImg3.setAttribute('src', forcastIcon3);
    dayImg3.setAttribute('alt', forcastDesc3);
    dayTemp3.innerHTML = `${forcast.list[22].main.temp.toFixed(0)}&#8457;`;
    const d3 = new Date(forcast.list[22].dt_txt);
    let day3 = d3.getDay();
    let dayName3 = getDayName(day3);
    dayWeek3.innerHTML = dayName3;
    
}

function getDayName(day) {
    if (day == 0) {
        return "Sun"
    } else if (day == 1) {
        return "Mon"
    } else if (day == 2) {
        return "Tue"
    } else if (day == 3) {
        return "Wed"
    } else if (day == 4) {
        return "Thur"
    } else if (day == 5) {
        return "Fri"
    } else if (day == 6) {
        return "Sat"
    }  
}