"use strict";
console.log('Hola Platzi world!!! Parece que todo va bien!');
// Number
// Explicito
var phone;
phone = 1;
phone = 5342728;
// phone = 'Hola';  // Error
// Inferido
var phoneNumber = 54938484;
// phoneNumber = true; // Error
var hex = 0xf00d;
var binary = 21;
var octal = 484;
// Tipo: Boolean
// Tipado Explicito
var isPro;
isPro = true;
// isPro = 1 // Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10;  // Error
// Tipo: String
// Tipado Explicito
var username = 'jhoguer';
username = "Jhon";
// username = true // Error
// Template String
// Uso de back-tick ` 
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstName: " + username + " Guerrero\n    phone: " + phone + "\n    isPro: " + isPro + "\n ";
console.log('userInfo', userInfo);
