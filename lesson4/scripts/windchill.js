const temp = document.querySelector('#temp');
const speed = document.querySelector('#speed');
let chill = document.querySelector('#chill');

let t = parseInt(temp.textContent);
let s = parseInt(speed.textContent);

function calculateChill() {
    chill.textContent = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 +0.4275 * t * s ** 0.16;
}
function checkNum() {
    if ((t < 50) && (s > 3)) {
        calculateChill();
    } else (
        console.log('failed')
    )
}

checkNum()

