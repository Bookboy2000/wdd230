const directoryUrl = 'jsons/directory.json';

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