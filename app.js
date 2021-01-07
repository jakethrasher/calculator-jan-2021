const inputOne = document.getElementById('input-1');
const inputTwo = document.getElementById('input-2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultsDisplay = document.getElementById('results');


// event handlers for each button redundantly writen out for practice 

// addButton.addEventListener('click', () => {
//     let result = Number(inputOne.value) + Number(inputTwo.value);
//     resultsDisplay.innerHTML = result;

// });
// subtractButton.addEventListener('click', () => {
//     let result = Number(inputOne.value) - Number(inputTwo.value);
//     resultsDisplay.innerHTML = result;

// });
// multiplyButton.addEventListener('click', () => {
//     let result = Number(inputOne.value) * Number(inputTwo.value);
//     resultsDisplay.innerHTML = result;

// });
// divideButton.addEventListener('click', () => {
//     let result = Number(inputOne.value) / Number(inputTwo.value);
//     resultsDisplay.innerHTML = result;

// });


//looping through the array of buttons 

const buttonsArray = document.querySelectorAll('button');

for (let button of buttonsArray) {

    button.addEventListener('click', () => {
        
        let numOne = Number(inputOne.value);
        let numTwo = Number(inputTwo.value);
        
        let result;
        
        if (button.id === 'add') {
            result = numOne + numTwo;
        } else if (button.id === 'subtract') {
            result = numOne - numTwo;
        } else if (button.id === 'multiply') {
            result = numOne * numTwo;
        } else if (button.id === 'divide') {
            result = numOne / numTwo;
        } else if (button.id === 'clear'){
            resultsDisplay.textContent = '';
            inputOne.value = '';
            inputTwo.value = '';
        }
        resultsDisplay.textContent = result;
    });
}






