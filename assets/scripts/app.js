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
 * generate and write control log
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
 * do the addition
 */
function add() {
    /**
     * use const for variable where that variable value will not be reassigned
     * use const on block statement as local variable most likely are not reassigned
     */
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    
    currentResult = currentResult + enteredNumber;
    /**
     * parseInt to convert the string to integer value
     * by default all the user input data is in string mode
     */
     createAndWriteOutput('+', initialResult, enteredNumber);
     writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

/**
 * do the subtraction
 */
function subtract() {
    /**
     * use const for variable where that variable value will not be reassigned
     * use const on block statement as local variable most likely are not reassigned
     */
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    
    currentResult = currentResult - enteredNumber;
    /**
     * parseInt to convert the string to integer value
     * by default all the user input data is in string mode
     */
     createAndWriteOutput('-', initialResult, enteredNumber);
     writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

/**
 * do the multiplication
 */
function multiply() {
    /**
     * use const for variable where that variable value will not be reassigned
     * use const on block statement as local variable most likely are not reassigned
     */
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    
    currentResult = currentResult * enteredNumber;
    /**
     * parseInt to convert the string to integer value
     * by default all the user input data is in string mode
     */
     createAndWriteOutput('*', initialResult, enteredNumber);
     writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

/**
 * do the division
 */
function division() {
    /**
     * use const for variable where that variable value will not be reassigned
     * use const on block statement as local variable most likely are not reassigned
     */
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    
    currentResult = currentResult / enteredNumber;
    /**
     * parseInt to convert the string to integer value
     * by default all the user input data is in string mode
     */
     createAndWriteOutput('/', initialResult, enteredNumber);
     writeToLog("DIVISION", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add); // on plus button click call add function
subtractBtn.addEventListener('click', subtract); // on minus button click call subtract function
multiplyBtn.addEventListener('click', multiply); // on multiply button click call multiply function
divideBtn.addEventListener('click', division); // on division button click call division function
