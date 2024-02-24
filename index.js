const formEl = document.querySelector('form');
const inputEl = document.querySelector('#emailInput');
const messageEl = document.querySelector('.label-message-container p');
const closeButton = document.querySelector('.succesMessage button');
const sectionEl = document.querySelector('section');
const succesMessageEl = document.querySelector('.succesMessage');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});
inputEl.addEventListener('input', () => {
    validateInput();
});
closeButton.addEventListener('click', () => {
    displaySection();
})

function validateForm() {
    const emailValue = inputEl.value;
    if (!emailValue) {
        messageEl.textContent = 'Field empty';
        messageEl.style.display = 'block';
    } else {
        displayMessage();
        inputEl.value = "";
    }
}

function validateInput() {
    if (!inputEl.checkValidity()) {
        messageEl.textContent = 'Valid email required';
        messageEl.style.display = 'block';
    } else {
        messageEl.textContent = '';
    }
}

function displayMessage() {
    sectionEl.style.display = 'none';
    succesMessageEl.style.display = 'flex';
}

function displaySection() {
    sectionEl.style.display = 'grid';
    succesMessageEl.style.display = 'none';
}