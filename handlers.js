import { addFunc, subtractFunc, multiplyFunc, divideFunc } from './utils.js';

const inputOne = document.getElementById('input-1');
const inputTwo = document.getElementById('input-2');
const resultsDisplay = document.getElementById('results');

export function addClickHandler() {
    const input1 = Number(inputOne.value);
    const input2 = Number(inputTwo.value);
    const result = addFunc(input1, input2);
    resultsDisplay.textContent = result;

}

export function subtractClickHandler() {
    const input1 = Number(inputOne.value);
    const input2 = Number(inputTwo.value);
    const result = subtractFunc(input1, input2);
    resultsDisplay.textContent = result;

}
export function multiplyClickHandler() {
    const input1 = Number(inputOne.value);
    const input2 = Number(inputTwo.value);
    const result = multiplyFunc(input1, input2);
    resultsDisplay.textContent = result;

}
export function divideClickHandler() {
    const input1 = Number(inputOne.value);
    const input2 = Number(inputTwo.value);
    const result = divideFunc(input1, input2);
    resultsDisplay.textContent = result;

}
export function clearClickHandler() {
    inputOne.value = '';
    inputTwo.value = '';
    resultsDisplay.textContent = '';
}








