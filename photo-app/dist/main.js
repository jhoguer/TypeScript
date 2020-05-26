"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_app_1 = require("./photo-app");
const user = new photo_app_1.User(1, 'jhoguer', 'Jhon', true);
const album = new photo_app_1.Album(10, 'Platzi Pictures');
const picture = new photo_app_1.Picture(1, 'TypeScript Course', '2020-05', photo_app_1.PhotoOrientation.Landscape);
// Creamos relaciones
album.addPicture(picture);
user.addAlbum(album);
console.log('album-->', album);
console.log('user-->', user);
