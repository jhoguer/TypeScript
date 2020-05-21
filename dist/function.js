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
