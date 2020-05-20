// Void


// Tipo explicito
function showInfo(user: any): any {
    console.log('USer Info', user.id, user.username, user.firstName);
    // return 'hola';
}


showInfo({ id: 1, username: 'jhoguer', firstName: 'Jhon'});


// Tipo Inferido
function showFormattedInfo(user: any) {
    console.log(`User Info 
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `);
}

showFormattedInfo({ id: 1, username: 'jhoguer', firstName: 'Jhon'});

// Tipo void, como tipo de dato en variable
let unusable: void;
// unusable = null;
unusable = undefined;

// Tipo Never
function handleError(code: number, message: string): never {
    // Process you code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found');
} catch(error) {
    console.log('Hubo unn error!!', error.message);
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while(true) {
        sum++;
    }

    // return sum;
}

sumNumbers(10);
// Ciclo infinito, el programa nunca termina
 
