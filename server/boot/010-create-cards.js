'use strict';

module.exports = function (app, cb) {

  app.models.Card.create([{
    id: 1,
    name: 'Ter Stegen',
    image: 'img',
    collectionId: 1,
    ratio: '0.20',
    rank: 'gold'
  }, {
    id: 3,
    name: 'Piqué',
    image: 'img',
    collectionId: 1,
    ratio: '0.15',
    rank: 'gold'
  }, {
    id: 4,
    name: 'Rakitic',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 5,
    name: 'Busquets',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 6,
    name: 'Denis Suarez',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 7,
    name: 'Arda Turan',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 8,
    name: 'Iniesta',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 9,
    name: 'Luis Suarez',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 10,
    name: 'Messi',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 11,
    name: 'Neymar',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 12,
    name: 'Rafinha',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 13,
    name: 'Cillessen',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 14,
    name: 'Mascherano',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 17,
    name: 'Paco Alcácer',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 18,
    name: 'Jordi Alba',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 19,
    name: 'Digne',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 20,
    name: 'Sergi Roberto',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 21,
    name: 'André Gomes',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 22,
    name: 'Aleix Vidal',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 23,
    name: 'Umtiti',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 24,
    name: 'Mathieu',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }, {
    id: 25,
    name: 'Masip',
    image: 'img',
    collectionId: 1,
    ratio: '0.30',
    rank: 'gold'
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
