"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Brackets Syntax
let username;
username = 'jhog';
// tenemos una cadena, TS confia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
console.log('message: ', message);
let usernameWithId = 'jhoguer 1';
// Como obtener el username?
username = usernameWithId.substring(0, 7);
console.log('Username only: ', username);
message = username.length > 5 ?
    `Welcome ${username}` :
    'Username is too short';
console.log('message: ', message);
let helloUSer;
helloUSer = 'hello paparazi';
username = helloUSer.substring(6);
console.log('Username: ', username);
