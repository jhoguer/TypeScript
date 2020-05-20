"use strict";
// Type: object
var user;
user = {};
user = {
    id: 1,
    username: 'jhoguer',
    firstName: 'Jhon',
    isPro: true
};
console.log('user: ', user);
// Obejct vs object(Clase JS vs tipo TS)
var myObj = {
    id: 1,
    username: 'jhoguer',
    firstName: 'Jhon',
    isPro: true
};
var isInstance = myObj instanceof Object; // clase Objetc de JavaScript
console.log('isInstance: ', isInstance);
console.log('myObj.username: ', myObj.username);
