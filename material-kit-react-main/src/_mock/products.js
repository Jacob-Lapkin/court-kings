import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Novak Djokovic',
  'Daniil Medvedev',
  'Rafael Nadal',
  'Stefanos Tsitsipas',
  'Alexander Zverev',
  'Andrey Rublev',
  'Matteo Berrettini',
  'Hubert Hurkacz',
  'Casper Ruud',
  'Jannik Sinner',
  'Diego Schwartzman',
  'Pablo Carreno Busta',
  'Felix Auger-Aliassime',
  'Roberto Bautista Agut',
  'Gael Monfils',
  'David Goffin',
  'Karen Khachanov',
  'Grigor Dimitrov',
  'Cristian Garin',
  'Borna Coric',
  'John Isner',
  'Adrian Mannarino',
  'Kyle Edmund',
  'Filip Krajinovic',
  ];

const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;
  const rankings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  
  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name: PRODUCT_NAME[index],
    ranking: rankings[index],
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});

export default products;

