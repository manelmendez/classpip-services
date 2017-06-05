'use strict';

module.exports = function (app, cb) {

  app.models.Card.create([{
    id: 1,
    name: 'Ter Stegen',
    image: 'img',
    ratio: '0.20',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 3,
    name: 'Piqué',
    image: 'img',
    ratio: '0.15',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 4,
    name: 'Rakitic',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 5,
    name: 'Busquets',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 6,
    name: 'Denis Suarez',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 7,
    name: 'Arda Turan',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 8,
    name: 'Iniesta',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 9,
    name: 'Luis Suarez',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 10,
    name: 'Messi',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 11,
    name: 'Neymar',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 12,
    name: 'Rafinha',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 13,
    name: 'Cillessen',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 14,
    name: 'Mascherano',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 17,
    name: 'Paco Alcácer',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 18,
    name: 'Jordi Alba',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 19,
    name: 'Digne',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 20,
    name: 'Sergi Roberto',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 21,
    name: 'André Gomes',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 22,
    name: 'Aleix Vidal',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 23,
    name: 'Umtiti',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 24,
    name: 'Mathieu',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 25,
    name: 'Masip',
    image: 'img',
    ratio: '0.30',
    rank: 'gold',
    collectionId: 1
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
