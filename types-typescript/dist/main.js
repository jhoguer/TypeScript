"use strict";
console.log('Hola Platzi world!!! Parece que todo va bien!');
// Number
// Explicito
let phone;
phone = 1;
phone = 5342728;
// phone = 'Hola';  // Error
// Inferido
let phoneNumber = 54938484;
// phoneNumber = true; // Error
let hex = 0xf00d;
let binary = 0b10101;
let octal = 0o744;
// Tipo: Boolean
// Tipado Explicito
let isPro;
isPro = true;
// isPro = 1 // Error
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10;  // Error
// Tipo: String
// Tipado Explicito
let username = 'jhoguer';
username = "Jhon";
// username = true // Error
// Template String
// Uso de back-tick ` 
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username} Guerrero
    phone: ${phone}
    isPro: ${isPro}
 `;
console.log('userInfo', userInfo);
