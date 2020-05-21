export {};

// <tipo> // Angle Brackets Syntax
let username: any;
username = 'jhog';

// tenemos una cadena, TS confia en mi!
let message: string = (<string>username).length > 5 ?
                    `Welcome ${username}` :
                    'Username is too short';

console.log('message: ', message);

let usernameWithId: any = 'jhoguer 1';
// Como obtener el username?
username = (<string>usernameWithId).substring(0, 7);
console.log('Username only: ', username);

message = (username as string).length > 5 ?
        `Welcome ${username}` :
        'Username is too short';

console.log('message: ', message);

let helloUSer: any;
helloUSer = 'hello paparazi';
username = (helloUSer as string).substring(6);
console.log('Username: ', username);
