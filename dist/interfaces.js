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
