export enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

export class User {
    private album: Album[];

    constructor(private id: number,
                private username: string,
                private firstName: string,
                private isPro: boolean) {
                    this.album = [];
                }
    addAlbum(album: Album) {
        this.album.push(album);
    }
}

abstract class Item {
    
    // Propiedades
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string) {
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

export class Album extends Item {
    private _pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this._pictures = [];
    }

    public addPicture(picture: Picture) {
        this._pictures.push(picture);
    }

}

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