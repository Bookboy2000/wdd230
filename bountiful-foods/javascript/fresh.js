url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    buildOptions(data);
};

getFruitData();

function buildOptions(fruits) {
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
        option2.setAttribute('value', fruit.name);
        fruitName2.innerHTML = fruit.name;
        option2.appendChild(fruitName2);
        selectElement2.appendChild(option2);

        let option3 = document.createElement('option');
        let fruitName3 = document.createElement('span');
        option3.setAttribute('value', fruit.name);
        fruitName3.innerHTML = fruit.name;
        option3.appendChild(fruitName3);
        selectElement3.appendChild(option3);
    });

    const drinkBtn = document.querySelector('.drink-btn');

    drinkBtn.addEventListener('click', () => {
        const fName = document.querySelector('.f-name');
        let paraName = document.querySelector('.para-name');
        paraName.textContent = fName.value;
    
        const email = document.querySelector('.email');
        let paraEmail = document.querySelector('.para-email');
        paraEmail.textContent = email.value;
    
        const phone = document.querySelector('.phone');
        let paraPhone = document.querySelector('.para-phone');
        paraPhone.textContent = phone.value;
    
        const instruct = document.querySelector('.instruct');
        let paraInstruct = document.querySelector('.para-instruct');
        paraInstruct.textContent = instruct.value;
    
        const fruit1 = document.querySelector('#fruit-1');
        const fruit2 = document.querySelector('#fruit-2');
        const fruit3 = document.querySelector('#fruit-3');
        const choice1 = document.querySelector('.choice-1');
        const choice2 = document.querySelector('.choice-2');
        const choice3 = document.querySelector('.choice-3');
        const date = document.querySelector('.order-date');
        const carb = document.querySelector('.carbs');
        const protein = document.querySelector('.protein');
        const fat = document.querySelector('.fat');
        const sugar = document.querySelector('.sugar');
        const calories = document.querySelector('.calories');

        choiceList1 = [];
        choiceList2 = [];
        choiceList3 = [];
        
    
        fruits.forEach((fruit) => {
            if (fruit.name == fruit1.value) {
                choice1.innerHTML = fruit.name;
                const carb1 = fruit.nutritions.carbohydrates;
                const protein1 = fruit.nutritions.protein;
                const fat1 = fruit.nutritions.fat;
                const sugar1 = fruit.nutritions.sugar;
                const calories1 = fruit.nutritions.calories;
                choiceList1.push(carb1, protein1, fat1, sugar1, calories1);
                
            } else if (fruit.name == fruit2.value) {
                choice2.innerHTML = fruit.name;
                const carb2 = fruit.nutritions.carbohydrates;
                const protein2 = fruit.nutritions.protein;
                const fat2 = fruit.nutritions.fat;
                const sugar2 = fruit.nutritions.sugar;
                const calories2 = fruit.nutritions.calories;
                choiceList2.push(carb2, protein2, fat2, sugar2, calories2);

            } else if (fruit.name == fruit3.value) {
                choice3.innerHTML = fruit.name;
                const carb3 = fruit.nutritions.carbohydrates;
                const protein3 = fruit.nutritions.protein;
                const fat3 = fruit.nutritions.fat;
                const sugar3 = fruit.nutritions.sugar;
                const calories3 = fruit.nutritions.calories;
                choiceList3.push(carb3, protein3, fat3, sugar3, calories3);
            };
        });
        const carbTotal = choiceList1[0] + choiceList2[0] + choiceList3[0];
        const proteinTotal = choiceList1[1] + choiceList2[1] + choiceList3[1];
        const fatTotal = choiceList1[2] + choiceList2[2] + choiceList3[2];
        const sugarTotal = choiceList1[3] + choiceList2[3] + choiceList3[3];
        const caloriesTotal = choiceList1[4] + choiceList2[4] + choiceList3[4];

        carb.innerHTML = carbTotal.toFixed(2);
        protein.innerHTML = proteinTotal.toFixed(2);
        fat.innerHTML = fatTotal.toFixed(2);
        sugar.innerHTML = sugarTotal.toFixed(2);
        calories.innerHTML = caloriesTotal.toFixed(2);
    }); 
};


