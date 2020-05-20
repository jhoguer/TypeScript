// Orientacion para Fotografias
// const landScape = 0;
// const portrait = 2;
// const square = 3;
// const panorama = 3;

enum PhotoOrientation {
    LandScape = 0, // La asignacion tambien se hace por defecto (Implicita)
    Portrait = 1,
    Square = 2,
    Panorama = 3
}

const landScape: PhotoOrientation = PhotoOrientation.LandScape;
console.log('landScape: ', landScape);
console.log('landScape-> ', PhotoOrientation[landScape]);

enum PictureOrientation {
    LandScape = 10,
    Portrait,
    Square,
    Panorama
}

console.log('Portrait=> ', PictureOrientation.Portrait);
console.log('LandScape=> ', PictureOrientation.LandScape);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    España = 'esp'
}

const country: Country = Country.Colombia;
console.log('Country: ', country);