import { User } from './user';
import { Album } from './album';
import { Picture } from './picture'
import { PhotoOrientation } from './PhotoOrientation';

const user = new User(1, 'jhoguer', 'Jhon', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2020-05', PhotoOrientation.Landscape);
// Creamos relaciones
album.addPicture(picture);
user.addAlbum(album);


// console.log('album-->', album);
console.log('user-->', user);

user.removeAlbum(album);
console.log('Borrando albun de user-->', user);
