/**
 * Create an function which is accept two parameter 
 * first is element name like p, h1, div etc and 
 * second parameter is rest of the parameter or an object of attributes of that element. 
 * finally return the html node.
 */
 function createHtmlElement(nodeName, nodeValues) {
     let values = '';
     for (const value in nodeValues) {
        values += '' + value + '="'+ nodeValues[value] + '" ';
     }
     let dom = `<${nodeName} ${values}></${nodeName}>`;
     return dom;
 }
 console.log( createHtmlElement( 'p', {id : "test", name : "test", style : "padding:0" } ) );
 //createHtmlElement('p', {id : "test", name : "test", style : "padding:0" });