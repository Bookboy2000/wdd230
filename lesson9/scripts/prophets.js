const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
getProphetData();


// The displayProphets function selects the div in the html,
// builds sections and then builds content for those sections and appends it.

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let paragraphBirth = document.createElement('p');
      let paragraphPlace = document.createElement('p');
      let paragraphDeath = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      paragraphBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
      paragraphPlace.textContent = `Birth Place: ${prophet.birthplace}`;
      paragraphDeath.textContent = `Date of Death: ${prophet.death}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(paragraphBirth);
      card.appendChild(paragraphPlace);
      card.appendChild(paragraphDeath);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression