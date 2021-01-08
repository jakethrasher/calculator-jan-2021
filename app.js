import { addClickHandler, subtractClickHandler, multiplyClickHandler, divideClickHandler, clearClickHandler } from './handlers.js';


const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const clearButton = document.getElementById('clear');





addButton.onclick = addClickHandler;

subtractButton.onclick = subtractClickHandler;

multiplyButton.onclick = multiplyClickHandler;

divideButton.onclick = divideClickHandler;

clearButton.onclick = clearClickHandler;


















//looping through the array of buttons 

// const buttonsArray = document.querySelectorAll('button');

// for (let button of buttonsArray) {

//     button.addEventListener('click', () => {
        
//         let numOne = Number(inputOne.value);
//         let numTwo = Number(inputTwo.value);
        
//         let result;
        
//         if (button.id === 'add') {
//             addClickHandler();
//         } else if (button.id === 'subtract') {
//             result = numOne - numTwo;
//         } else if (button.id === 'multiply') {
//             result = numOne * numTwo;
//         } else if (button.id === 'divide') {
//             result = numOne / numTwo;
//         } else if (button.id === 'clear'){
//             resultsDisplay.textContent = '';
//             inputOne.value = '';
//             inputTwo.value = '';
//         }
//         resultsDisplay.textContent = result;
//     });
// }






