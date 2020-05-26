import { Item } from './item';
import { PhotoOrientation } from './PhotoOrientation';

export class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    // Propiedades

    private _date: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, date: string, orientation: PhotoOrientation) {
        super(id, title);
        this._date = date;
        this._orientation = orientation;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}
                ]`;
    }
}