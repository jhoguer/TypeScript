export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// Superclase
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

// Clase Picture
class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    // Propiedades

    private _orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id, title);
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

class Album extends Item {
    private _pictures: Picture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this._pictures = [];
    }

    public addPicture(picture: Picture) {
        this._pictures.push(picture);
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
// picture.id = 100; // Son miembros privados // readonly
picture.title = 'Another title'; // Son miembros privados
album.title = 'Personal Activities'; // Son miembros privados
console.log('album ', album);

// const item = new Item(1, 'Test title');
// console.log('item=> ', item);

// Probar el miembro estatico
console.log('PhotoOrientation-> ', Picture.photoOrientation.Panorama);
// console.log('PhotoOrientation-> ', Item.photoOrientation.Square);