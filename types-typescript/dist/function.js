"use strict";
// Crear una Fotografia
// function createPicture(title, date, size) {
//     // title
// }
// Usamos TS, difnimos tipo para parametros
// function createPicture(title: string, date: string, size: SquareSize) {
//     // Se crea la Fotografia
//     console.log('create picture using', title, date, size);
// }
// createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia Trip', '2020-03');
// Parametros opcionales en funciones
function createPicture(title, date, size) {
    // Se crea la Fotografia
    console.log('create picture using', title, date, size);
}
createPicture('My Birthday', '2020-03-10', '500x500');
createPicture('Colombia Trip', '2020-03');
createPicture('Colombia Trip');
createPicture();
// Flat Array Functions
let createPic = (title, date, size) => {
    return { title, date, size };
};
const picture = createPic('Platzi Session', '2020-03-10', '100x100');
console.log('picture: ', picture);
// Tipo de retorno con TypeScript
function handleError(code, message) {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(`${message} Code error: ${code}`);
    }
    else {
        return `An error has ocurred`;
    }
}
try {
    let result = handleError(200, 'OK'); // string
    console.log('result: ', result);
    result = handleError(404, 'error'); // never
    console.log('result: ', result);
}
catch (error) {
}
