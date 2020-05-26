// Type: object
let user: object;
user = {};

user = {
    id: 1,
    username: 'jhoguer',
    firstName: 'Jhon',
    isPro: true
};

console.log('user: ', user);
// Obejct vs object(Clase JS vs tipo TS)
const myObj = {
    id: 1,
    username: 'jhoguer',
    firstName: 'Jhon',
    isPro: true
};
const isInstance = myObj instanceof Object; // clase Objetc de JavaScript
console.log('isInstance: ', isInstance);
console.log('myObj.username: ', myObj.username);