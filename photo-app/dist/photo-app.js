"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = exports.Album = exports.User = exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
}
exports.User = User;
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    // set id(id: number) {
    //     this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Album extends Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
exports.Album = Album;
let Picture = /** @class */ (() => {
    class Picture extends Item {
        constructor(id, title, date, orientation) {
            super(id, title);
            this._date = date;
            this._orientation = orientation;
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
    Picture.photoOrientation = PhotoOrientation;
    return Picture;
})();
exports.Picture = Picture;
