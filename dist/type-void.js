"use strict";
// Void
// Tipo explicito
function showInfo(user) {
    console.log('USer Info', user.id, user.username, user.firstName);
    // return 'hola';
}
showInfo({ id: 1, username: 'jhoguer', firstName: 'Jhon' });
// Tipo Inferido
function showFormattedInfo(user) {
    console.log("User Info \n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'jhoguer', firstName: 'Jhon' });
// Tipo void, como tipo de dato en variable
var unusable;
// unusable = null;
unusable = undefined;
// Tipo Never
function handleError(code, message) {
    // Process you code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
    console.log('Hubo unn error!!', error.message);
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
// Ciclo infinito, el programa nunca termina
