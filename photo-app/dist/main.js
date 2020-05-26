"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const PhotoOrientation_1 = require("./PhotoOrientation");
const user = new user_1.User(1, 'jhoguer', 'Jhon', true);
const album = new album_1.Album(10, 'Platzi Pictures');
const picture = new picture_1.Picture(1, 'TypeScript Course', '2020-05', PhotoOrientation_1.PhotoOrientation.Landscape);
// Creamos relaciones
album.addPicture(picture);
user.addAlbum(album);
// console.log('album-->', album);
console.log('user-->', user);
user.removeAlbum(album);
console.log('Borrando albun de user-->', user);
