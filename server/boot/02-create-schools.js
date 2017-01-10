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
    phone: '123456789'
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
    website: 'http://www.joanpelegri.cat/'
  }], function (err) {

    if (err) throw err;
    process.nextTick(cb);
  });
};
