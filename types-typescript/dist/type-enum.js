"use strict";
// Orientacion para Fotografias
// const landScape = 0;
// const portrait = 2;
// const square = 3;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["LandScape"] = 0] = "LandScape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
const landScape = PhotoOrientation.LandScape;
console.log('landScape: ', landScape);
console.log('landScape-> ', PhotoOrientation[landScape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["LandScape"] = 10] = "LandScape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log('Portrait=> ', PictureOrientation.Portrait);
console.log('LandScape=> ', PictureOrientation.LandScape);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espa\u00F1a"] = "esp";
})(Country || (Country = {}));
const country = Country.Colombia;
console.log('Country: ', country);
