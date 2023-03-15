// Creating the cards using data from directory.json

const directoryUrl = './jsons/directory.json';

async function getDirectoryData() {
    const response = await fetch(directoryUrl);
    const data = await response.json();
    displayDirectory(data.businesses);
};

getDirectoryData();


const displayDirectory = (businesses) => {
    const cards = document.querySelector('.cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let icon = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        h3.textContent = `${business.name}`;
        address.textContent = `Address: ${business.address}`;
        phone.textContent = `Phone: ${business.phone}`
        website.textContent = `Website: ${business.website}`

        // Adding a class to all items to make it easier to switch grid formats
        h3.classList.add('name');
        icon.classList.add('icon')
        address.classList.add('address');
        phone.classList.add('phone');
        website.classList.add('website');

        icon.setAttribute('src', business.url);
        icon.setAttribute('alt', `Icon for ${business.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '64');

        card.appendChild(h3);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
        
    });
};


// Making the list button chnage when you press it

const gridBtn = document.querySelector('.grid-btn-off');
const listBtn = document.querySelector('.list-btn');
const layout = document.querySelector('.cards');

listBtn.addEventListener('click', () => {
    listBtn.classList.add('list-btn-off');
    listBtn.classList.remove('list-btn');

    gridBtn.classList.add('grid-btn');
    gridBtn.classList.remove('grid-btn-off');

    layout.classList.add('items');
    layout.classList.remove('cards');
});


gridBtn.addEventListener('click', () => {
    listBtn.classList.add('list-btn');
    listBtn.classList.remove('list-btn-off');

    gridBtn.classList.add('grid-btn-off');
    gridBtn.classList.remove('grid-btn');

    layout.classList.add('cards');
    layout.classList.remove('items');
});