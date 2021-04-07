// const defaultResult = 0;
// let currentResult = 0;
// currentResult = ( currentResult + 10 ) * 3 / 2;
// let calculationDescription = '( ' + defaultResult + ' + 10 ) * 3 / 2';
// outputResult( currentResult , calculationDescription );

/**
 * Count the number of element
 * return the number
 */

function countHtmlElement(dom) {
    return document.getElementsByTagName(''+dom).length
}
let result = countHtmlElement('button'); // call countHtmlElement function with the parameter and keep the return data in result variable
console.log(result); // print the result data in console