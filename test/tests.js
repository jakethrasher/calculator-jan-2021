import { addFunc, subtractFunc, divideFunc, multiplyFunc } from '../utils.js';



const test = QUnit.test;

//addFunc tests//
//test 1
test('it should return 4 when given inputs of 2 and 2', (expect) => {
   
    const expected = 4;
    
    const actual = addFunc(2, 2);

    expect.equal(actual, expected);
});
//test 2
test('it should return -5 when given inputs of 0 and -5', (expect) => {
    
    const expected = -5;
    
    const actual = addFunc(0, -5);

    expect.equal(actual, expected);
});


//subtractFun tests//
//test 1
test('it should return 2 when given inputs of 4 and 2', (expect) => {

    const expected = 2;
    
    const actual = subtractFunc(4, 2);

    expect.equal(actual, expected);
});
//test 2
test('it should return 50 when given inputs of 100 and 50', (expect) => {

    const expected = 50;
    
    const actual = subtractFunc(100, 50);

    expect.equal(actual, expected);
});

//multiplyFunc tests//
//test 1
test('it should return 16 when given inputs of 4 and 4', (expect) => {

    const expected = 16;
    
    const actual = multiplyFunc(4, 4);

    expect.equal(actual, expected);
});
//test 2
test('it should return -1 when given inputs of 1 and -1', (expect) => {

    const expected = -1;
    
    const actual = multiplyFunc(1, -1);

    expect.equal(actual, expected);
});

//divideFunc tests//
//test 1
test('it should return 2 when given inputs of 10 and 5', (expect) => {

    const expected = 2;
    
    const actual = divideFunc(10, 5);

    expect.equal(actual, expected);
});
test('it should return -2 when given inputs of 10 and -5', (expect) => {

    const expected = -2;
    
    const actual = divideFunc(10, -5);

    expect.equal(actual, expected);
});