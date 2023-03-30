
let visit = document.querySelector('#visit');

let today = Date.now();

let oldDate = localStorage.getItem("oldDate");

function compareDate() {
    if (oldDate >= 1) {
        let outcome = (oldDate - today) / 84600000;
        outcome = Math.abs(outcome);
        let rounded = Math.round(outcome);
        visit.textContent = "It has been " + rounded + " days since you were here."; 
    } else {
        visit.textContent = "This is your first visit. Welcome!";
    };
    
};

compareDate();

localStorage.setItem("oldDate", today);



// Intersection Observer


let imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    let dataSrc = image.getAttribute("data-src");
    image.setAttribute("src", dataSrc);
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target)
            }
        });
    }, imageOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
};