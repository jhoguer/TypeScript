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
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
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
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
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
console.log('picture.id', picture.id);
picture.id = 100; // Son miembros privados
picture.title = 'Another title'; // Son miembros privados
album.title = 'Personal Activities'; // Son miembros privados
console.log('album ', album);
