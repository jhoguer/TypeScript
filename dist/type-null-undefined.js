"use strict";
// Explicita
var nullVariable;
nullVariable = null;
// nullVariable = 1; // Error
var otherVariable = null;
otherVariable = 'test';
console.log('nullVariable: ', nullVariable);
console.log('otherVariable: ', otherVariable);
// Undefined
var undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error
var otherUndefined = undefined;
otherUndefined = 1;
console.log('undefinedVariable: ', undefinedVariable);
console.log('otherUndefined: ', otherUndefined);
// Null y Undefin: Como subtipos
// --strictNullChecks
var albunName;
// albunName = null;
// albunName = undefined;
