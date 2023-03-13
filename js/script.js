'use strict'

let firstField = document.querySelector('.firstField');
let secondField = document.querySelector('.secondField');

let plusButton = document.querySelector('.button-plus');
let minButton = document.querySelector('.button-min');
let mulButton = document.querySelector('.button-mul');
let divideButton = document.querySelector('.button-divide');

let clear = document.querySelector('.clear-button');

let resultField = document.querySelector('.resultField');

let result;

plusButton.addEventListener('click', () => {
    let num1 = Number(document.querySelector('.firstField').value);
    let num2 = Number(document.querySelector('.secondField').value);

    result = num1 + num2;
    resultField.textContent = result;
})

minButton.addEventListener('click', () => {
    let num1 = Number(document.querySelector('.firstField').value);
    let num2 = Number(document.querySelector('.secondField').value);

    result = num1 - num2;
    resultField.textContent = result;
})

mulButton.addEventListener('click', () => {
    let num1 = Number(document.querySelector('.firstField').value);
    let num2 = Number(document.querySelector('.secondField').value);

    result = num1 * num2;
    resultField.textContent = result;
})

divideButton.addEventListener('click', () => {
    let num1 = Number(document.querySelector('.firstField').value);
    let num2 = Number(document.querySelector('.secondField').value);

    result = num1 / num2;
    resultField.textContent = result;
})

clear.addEventListener('click', () => {
    firstField.value = '';
    secondField.value = '';
    resultField.textContent = '';
})