
name1 = document.querySelector('.spot-1-name');
img1 = document.querySelector('.spot-1-img');
address1 = document.querySelector('.spot-1-address');
number1 = document.querySelector('.spot-1-number');
site1 = document.querySelector('.spot-1-site');

name2 = document.querySelector('.spot-2-name');
img2 = document.querySelector('.spot-2-img');
address2 = document.querySelector('.spot-2-address');
number2 = document.querySelector('.spot-2-number');
site2 = document.querySelector('.spot-2-site');



const directoryUrl = './jsons/directory.json';

async function getDirectoryData() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displaySpotlights(data.businesses);
};

getDirectoryData();

function getRandomInt() {
    return Math.floor(Math.random() * 9);
  }


const displaySpotlights = (businesses) => {
    spotInt1 = getRandomInt();
    spotInt2 = getRandomInt();

    if (spotInt1 == spotInt2 || businesses[spotInt1].membership == "Bronze" || businesses[spotInt1].membership == "Non-Profit"
    || businesses[spotInt2].membership == "Bronze" || businesses[spotInt2].membership == "Non-Profit") {
        displaySpotlights(businesses);
    } else {
        name1.textContent = businesses[spotInt1].name;
        address1.textContent = businesses[spotInt1].address;
        number1.textContent = businesses[spotInt1].phone;
        site1.textContent = businesses[spotInt1].website;
        const iconSrc1 = businesses[spotInt1].url;

        img1.setAttribute('src', iconSrc1);
        img1.setAttribute('alt', `Icon for ${businesses[spotInt1].name}`);

        name2.textContent = businesses[spotInt2].name;
        address2.textContent = businesses[spotInt2].address;
        number2.textContent = businesses[spotInt2].phone;
        site2.textContent = businesses[spotInt2].website;
        const iconSrc2 = businesses[spotInt2].url;

        img2.setAttribute('src', iconSrc2);
        img2.setAttribute('alt', `Icon for ${businesses[spotInt2].name}`);
    }
};