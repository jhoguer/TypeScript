export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
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

    set orientation(orientation: PhotoOrientation) {
        this._orientatio
        n = orientation;
    }

    // Comportamiento
    public toString() {
        return `[id: ${this.id},
                 title: ${this.title},
                 orientation: ${this.orientation}
                ]`;
    }
}

class Album {
    private _id: number;
    private _title: string;
    private _pictures: Picture[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }

    public addPicture(picture: Picture) {
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

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Platzi sesion', PhotoOrientation.Square);
const picture1: Picture = new Picture(2, 'Jhoguer', PhotoOrientation.Landscape);
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