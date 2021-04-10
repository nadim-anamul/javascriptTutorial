const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


/**
 * get input from user input
 * 
 */
function getUserInput() {
    return parseInt(userInput.value)
}
/**
 * 
 * @param {*} operator 
 * @param {*} resultBeforeCalc 
 * @param {*} calcNumber 
 */
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult( currentResult , calcDescription ); // from vendor.js
}
/**
 * store the log of calculation
 * @param {operation} operationIdentifier identifies the operation
 * @param {result} prevResult get the previous result
 * @param {new number} operationNumber get the entered number
 * @param {result} newResult get new result
 */

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);

}
/**
 * 
 * @param {*} calculationType 
 */

function calculateResult(calculationType) {
    /**
     * use const for variable where that variable value will not be reassigned
     * use const on block statement as local variable most likely are not reassigned
     */
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let methOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        methOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        methOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        methOperator = '*';
    } else if (calculationType === 'DIVISION') {
        currentResult /= enteredNumber;
        methOperator = '/';
    }
    
    
    /**
     * parseInt to convert the string to integer value
     * by default all the user input data is in string mode
     */
    createAndWriteOutput(methOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
/**
 * do the addition
 */
function add() {
    calculateResult('ADD');
}

/**
 * do the subtraction
 */
function subtract() {
    calculateResult('SUBTRACT');
}

/**
 * do the multiplication
 */
function multiply() {
    calculateResult('MULTIPLY');
}

/**
 * do the division
 */
function division() {
    calculateResult('DIVISION');
}

addBtn.addEventListener('click', add); // on plus button click call add function
subtractBtn.addEventListener('click', subtract); // on minus button click call subtract function
multiplyBtn.addEventListener('click', multiply); // on multiply button click call multiply function
divideBtn.addEventListener('click', division); // on division button click call division function
