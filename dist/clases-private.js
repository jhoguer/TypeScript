"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}
                ]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Personal Pictures');
const picture = new Picture(1, 'Platzi sesion', PhotoOrientation.Square);
const picture1 = new Picture(2, 'Jhoguer', PhotoOrientation.Landscape);
album.addPicture(picture);
album.addPicture(picture1);
// console.log('Picture=>', picture.toString());
console.log('album ', album);
// Accediento a los miembros publicos
// picture.id = 100; // Son miembros privados
// picture.title = 'Another title'; // Son miembros privados
// album.title = 'Personal Activities'; // Son miembros privados
console.log('album ', album);
