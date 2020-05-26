"use strict";
// Explicita
let nullVariable;
nullVariable = null;
// nullVariable = 1; // Error
let otherVariable = null;
otherVariable = 'test';
console.log('nullVariable: ', nullVariable);
console.log('otherVariable: ', otherVariable);
// Undefined
let undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error
let otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable: ', undefinedVariable);
console.log('otherUndefined: ', otherUndefined);
// Null y Undefin: Como subtipos
// --strictNullChecks
let albunName;
// albunName = null;
// albunName = undefined;
