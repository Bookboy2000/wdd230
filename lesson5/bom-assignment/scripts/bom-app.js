
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {

    const item = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = item
    listItem.appendChild(listText);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    listBtn.textContent = '❌';
    listItem.appendChild(listBtn);
    
    list.appendChild(listItem);

    
    input.focus();
});