const countingButton = document.querySelector('#counting-button');
const alertContainer = document.querySelector('.alert-container');
const alertPopup = document.querySelector('.alert');
const closePopup = document.querySelector('#close-alert');
const counterSpan = document.querySelector('.counter-span');
const resetButton = document.querySelector('#reset-button');

let counter;


localStorage.getItem('counter') === null ? counter = 0 : counter = parseInt(localStorage.getItem('counter')) ;



const alertOpener = () => {
    alertContainer.classList.remove('not-active');
    counter++;
    localStorage.setItem('counter', counter);
    counterSpan.innerText = counter + ' times';
    if (counter >= 5) {
        resetButton.classList.remove('not-active');
        resetButton.addEventListener('click', resetCounter);
    }
}


const resetCounter = () => {
    counter = 0;
    localStorage.setItem('counter', counter);
    resetButton.classList.add('not-active');
    counterSpan.innerText = counter + ' times';
}

countingButton.addEventListener('click',  alertOpener)

closePopup.addEventListener('click', () => alertContainer.classList.add('not-active'));

alertContainer.addEventListener('click', e => {
    if (!alertPopup.contains(e.target)) {
        alertContainer.classList.add('not-active')
    }
  });