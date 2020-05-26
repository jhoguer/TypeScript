"use strict";
// Funcion para mostrar una fotografia
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
function showPicture(picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Other title',
    date: '2020-05',
    orientation: PhotoOrientation.Portrait
    // extra: 'test' // Error
});
function generatePicture(config) {
    const pic = { title: 'Default', date: '2020-08', orientation: PhotoOrientation.Panorama };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    if (config.orientatipon) {
        pic.orientation = config.orientatipon;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic', orientatipon: PhotoOrientation.Portrait });
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic', orientatipon: PhotoOrientation.Portrait, date: '2021-09' });
console.log('picture', picture);
let user;
user = { id: 10, username: 'jhoguer', isPro: true };
console.log('user', user);
user.username = 'Jhon';
user.id = 30;
console.log('User ', user);
