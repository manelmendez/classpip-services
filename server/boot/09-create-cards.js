'use strict';

module.exports = function (app, cb) {

  app.models.Card.create([{
    id: 1,
    name: 'Ter Stegen',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 2,
    name: 'Piqué',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 3,
    name: 'Rakitic',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 4,
    name: 'Busquets',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 5,
    name: 'Denis Suarez',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 6,
    name: 'Arda Turan',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 7,
    name: 'Iniesta',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 8,
    name: 'Luis Suarez',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionCardId: 1
  }, {
    id: 9,
    name: 'Messi',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionCardId: 1
  }, {
    id: 10,
    name: 'Neymar',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionCardId: 1
  }, {
    id: 11,
    name: 'Rafinha',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'medium',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 12,
    name: 'Cillessen',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'bronze',
    collectionCardId: 1
  }, {
    id: 13,
    name: 'Mascherano',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 14,
    name: 'Paco Alcácer',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 15,
    name: 'Jordi Alba',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 16,
    name: 'Digne',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 17,
    name: 'Sergi Roberto',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 18,
    name: 'André Gomes',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 19,
    name: 'Aleix Vidal',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 20,
    name: 'Umtiti',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 21,
    name: 'Mathieu',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 22,
    name: 'Masip',
    image: 'http://68.media.tumblr.com/8bdf7eb532b612406d1d277d63a2a776/tumblr_og8po3gVwv1vxw2h0o1_1280.jpg',
    ratio: 'high',
    rank: 'bronze',
    collectionCardId: 1
  }, {
    id: 23,
    name: 'Keylor',
    image: 'http://www.fichajes.net/files/keylor_navas_12_1.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 2
  }, {
    id: 24,
    name: 'Varane',
    image: 'http://latribunamadridista.com/wp-content/uploads/2015/04/Raphael-Varane.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 2
  }, {
    id: 25,
    name: 'Ramos',
    image: 'https://www.lapelotona.com/wp-content/uploads/2016/12/Sergio-Ramos-1.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionCardId: 2
  }
  ], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
