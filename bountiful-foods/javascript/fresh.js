url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    buildOption(data);
};

getFruitData();

function buildOption(fruits) {
    const selectElement1 = document.querySelector('#fruit-1');
    const selectElement2 = document.querySelector('#fruit-2');
    const selectElement3 = document.querySelector('#fruit-3');

    fruits.forEach((fruit) => {
        let option1 = document.createElement('option');
        let fruitName1 = document.createElement('span');
        option1.setAttribute('value', fruit.name);
        fruitName1.innerHTML = fruit.name;
        option1.appendChild(fruitName1);
        selectElement1.appendChild(option1);

        let option2 = document.createElement('option');
        let fruitName2 = document.createElement('span');
        let empty1 = document.createElement('option');
        option2.setAttribute('value', fruit.name);
        fruitName2.innerHTML = fruit.name;
        option2.appendChild(fruitName2);
        selectElement2.appendChild(empty1);
        selectElement2.appendChild(option2);

        let option3 = document.createElement('option');
        let fruitName3 = document.createElement('span');
        let empty2 = document.createElement('option');
        option3.setAttribute('value', fruit.name);
        fruitName3.innerHTML = fruit.name;
        option3.appendChild(fruitName3);
        selectElement3.appendChild(empty2);
        selectElement3.appendChild(option3);
      
        
    });
};

const drinkBtn = document.querySelector('.drink-btn');

drinkBtn.addEventListener('click', () => {
    let fName = document.querySelector('.fname');
    fName.innerHTML = 
});


