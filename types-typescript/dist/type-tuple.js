"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1, 'user]
let user;
user = [1, 'jhoguer'];
console.log('user: ', user);
console.log('username=> ', user[1]);
console.log('username.length=> ', user[1].length);
console.log('id=> ', user[0]);
// Tuplas con varios valores
// id, username, isPro
let userInfo;
userInfo = [2, 'jhonl', true];
console.log('userInfo-> ', userInfo);
// Arreglo de tuplas
let array = [];
array.push([1, 'jhoguer']);
array.push([1, 'leider86']);
array.push([1, 'jhon']);
array.push([1, 'Simoneti']);
console.log('array: ', array);
// Uso de funciones Array
// jhon -> jhon15
array[2][1] = array[2][1].concat('15');
console.log('array: ', array);
