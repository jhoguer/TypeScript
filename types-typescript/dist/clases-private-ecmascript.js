"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _orientation, _id_1, _title_1, _pictures;
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
        // Propiedades
        _id.set(this, void 0);
        _title.set(this, void 0);
        _orientation.set(this, void 0);
        __classPrivateFieldSet(this, _id, id);
        __classPrivateFieldSet(this, _title, title);
        __classPrivateFieldSet(this, _orientation, orientation);
    }
    // Comportamiento
    toString() {
        return `[id: ${__classPrivateFieldGet(this, _id)},
                 title: ${__classPrivateFieldGet(this, _title)},
                 orientation: ${__classPrivateFieldGet(this, _orientation)}
                ]`;
    }
}
_id = new WeakMap(), _title = new WeakMap(), _orientation = new WeakMap();
class Album {
    constructor(id, title) {
        _id_1.set(this, void 0);
        _title_1.set(this, void 0);
        _pictures.set(this, void 0);
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _title_1, title);
        __classPrivateFieldSet(this, _pictures, []);
    }
    addPicture(picture) {
        __classPrivateFieldGet(this, _pictures).push(picture);
    }
}
_id_1 = new WeakMap(), _title_1 = new WeakMap(), _pictures = new WeakMap();
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
