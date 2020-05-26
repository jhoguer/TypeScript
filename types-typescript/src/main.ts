console.log('Hola Platzi world!!! Parece que todo va bien!');

// Number
// Explicito
let phone: number;
phone = 1;
phone = 5342728;
// phone = 'Hola';  // Error

// Inferido
let phoneNumber = 54938484;
// phoneNumber = true; // Error

let hex: number = 0xf00d;
let binary: number = 0b10101;
let octal: number = 0o744;

// Tipo: Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
 // isPro = 1 // Error
 
 // Inferido
 let isUserPro = false;
 isUserPro = true;
 // isUserPro = 10;  // Error

 // Tipo: String
 // Tipado Explicito
 let username: string = 'jhoguer';
 username = "Jhon";
 // username = true // Error

 // Template String
 // Uso de back-tick ` 
 let userInfo: string;
 userInfo = `
    User Info:
    username: ${username}
    firstName: ${username} Guerrero
    phone: ${phone}
    isPro: ${isPro}
 `;

 console.log('userInfo', userInfo);

