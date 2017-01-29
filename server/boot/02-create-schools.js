'use strict';

module.exports = function (app, cb) {

  app.models.School.create([{
    name: 'Liceu Sant Jordi',
    cif: '12345678A',
    address: 'Carrer Regent Mendieta 5',
    zipCode: '08028',
    city: 'Barcelona',
    country: 'Spain',
    latitude: 41.3768299,
    longitude: 2.1200323,
    phone: '123456789',
    image: 'https://cdn0.iconfinder.com/data/icons/tutor-icon-set/512/set_of_three_books-128.png',
    imageBig: 'http://images.freeimages.com/images/previews/ec3/buildings-and-creations-2-1518248.jpg'
  }, {
    name: 'Joan Pelegrí',
    cif: '12345678A',
    address: 'Carrer d\'Ermengarda, 13-25',
    zipCode: '08014',
    city: 'Barcelona',
    country: 'Spain',
    latitude: 41.3767965,
    longitude: 2.1403385,
    phone: '934316200',
    website: 'http://www.joanpelegri.cat/',
    image: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/schooolbus-128.png',
    imageBig: 'http://images.freeimages.com/images/previews/180/school-desks-1418686.jpg'
  }], function (err) {

    if (err) throw err;
    process.nextTick(cb);
  });
};
