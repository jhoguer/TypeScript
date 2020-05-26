"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
const PhotoOrientation_1 = require("./PhotoOrientation");
let Picture = /** @class */ (() => {
    class Picture extends item_1.Item {
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
    Picture.photoOrientation = PhotoOrientation_1.PhotoOrientation;
    return Picture;
})();
exports.Picture = Picture;
