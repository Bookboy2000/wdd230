const tempElement = document.querySelector('#temp');
const speed = document.querySelector('#speed');
let chill = document.querySelector('#chill');

let tempValue = parseInt(tempElement.textContent);
let s = parseInt(speed.textContent);

function calculateChill() {
    chill.textContent = parseInt(35.74 + 0.6215 * tempValue - 35.75 * s ** 0.16 +0.4275 * tempValue * s ** 0.16);
}
function checkNum() {
    if ((tempValue <= 50) && (s > 3)) {
        calculateChill();
    } else (
        console.log('failed')
    )
}

checkNum()

