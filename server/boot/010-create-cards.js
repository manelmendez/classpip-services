'use strict';

module.exports = function (app, cb) {

  app.models.Card.create([{
    id: 1,
    name: 'Ter Stegen',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 3,
    name: 'Piqué',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 4,
    name: 'Rakitic',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 5,
    name: 'Busquets',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 6,
    name: 'Denis Suarez',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 7,
    name: 'Arda Turan',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 8,
    name: 'Iniesta',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 9,
    name: 'Luis Suarez',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionId: 1
  }, {
    id: 10,
    name: 'Messi',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionId: 1
  }, {
    id: 11,
    name: 'Neymar',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionId: 1
  }, {
    id: 12,
    name: 'Rafinha',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'medium',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 13,
    name: 'Cillessen',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'bronze',
    collectionId: 1
  }, {
    id: 14,
    name: 'Mascherano',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 17,
    name: 'Paco Alcácer',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 18,
    name: 'Jordi Alba',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 19,
    name: 'Digne',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 20,
    name: 'Sergi Roberto',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 21,
    name: 'André Gomes',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 22,
    name: 'Aleix Vidal',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 23,
    name: 'Umtiti',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionId: 1
  }, {
    id: 24,
    name: 'Mathieu',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionId: 1
  }, {
    id: 25,
    name: 'Masip',
    image: 'http://wallpaperscraft.ru/image/kotenok_pushistyy_miska_vzglyad_59396_300x450.jpg',
    ratio: 'high',
    rank: 'bronze',
    collectionId: 1
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
