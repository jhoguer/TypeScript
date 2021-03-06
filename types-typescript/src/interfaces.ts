// Funcion para mostrar una fotografia

export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
};

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);

showPicture({
    title: 'Other title',
    date: '2020-05',
    orientation: PhotoOrientation.Portrait
    // extra: 'test' // Error
});

interface PictureConfig {
    title?: string,
    date?: string,
    orientatipon?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = { title: 'Default', date: '2020-08', orientation: PhotoOrientation.Panorama };
    if (config.title) {
        pic.title = config.title
    }

    if (config.date) {
        pic.date = config.date;
    }

    if (config.orientatipon) {
        pic.orientation = config.orientatipon;
    }

    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic', orientatipon: PhotoOrientation.Portrait });
console.log('picture', picture);

picture = generatePicture({ title: 'Travel Pic', orientatipon: PhotoOrientation.Portrait, date: '2021-09' });
console.log('picture', picture);

// Interfaz de Usuario
interface User {
    readonly id: number, // Solo lectura
    username: string,
    isPro: boolean,
}

let user: User;
user = { id: 10, username: 'jhoguer', isPro: true };
console.log('user', user);
user.username = 'Jhon';
user.id = 30;
console.log('User ', user);

