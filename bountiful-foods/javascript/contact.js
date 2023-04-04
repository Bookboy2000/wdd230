lastTime = document.querySelector('.last-mod');
lastTime.innerHTML = new Date(document.lastModified);

questionBtn = document.querySelector('.question-btn');

questionBtn.addEventListener('click', () => {
    form = document.getElementById('question-form');
    if (form.reportValidity() != true) {
        document.getElementById('question-bad').classList.add('question-invalid');
        document.querySelector('.question-invalid').classList.remove('question-valid')
    } else {
        document.getElementById('question-good').classList.add('question-here');
        document.querySelector('.question-here').classList.remove('question-gone')

        if (document.getElementById('question-bad').classList.contains('question-invalid')) {
            document.querySelector('.question-invalid').classList.add('question-valid');
            document.querySelector('.question-invalid').classList.remove('question-invalid');
        } else {
        };
    }
})