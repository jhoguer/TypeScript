"use strict";
// corchetes
// Tipo Explicito
var users;
users = ['Jhon Leider', 'jhoguer', 'Leider'];
// users = [1, true, 'test']; // Error
// Tipo Inferido
var otherUsers = ['Jhon Leider', 'jhoguer', 'Leider'];
// otherUsers = [1, true, 'test'];
// Array<TIPO>
var pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape'];
// Accediendo a los valores en el Array
console.log('first user', users[0]);
console.log('first title', pictureTitles[0]);
// Propiedades en Array
console.log('users.length: ', users.length);
// Uso de funciones en Arrays
users.push('aPlaziUser');
users.sort();
console.log('users:> ', users);
