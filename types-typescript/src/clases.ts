export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    // Propiedades
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
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
    public id: number;
    public title: string;
    public pictures: Picture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture);
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
picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';
console.log('album ', album);