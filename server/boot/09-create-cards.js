'use strict';

module.exports = function (app, cb) {

  app.models.Card.create([{
    id: 1,
    name: 'Ter Stegen',
    image: 'https://www.blaugranas.com/media/galeria/25/8/0/2/4/n_f_c_barcelona_marc_andre_ter_stegen-11144208.jpeg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 2,
    name: 'Piqué',
    image: 'http://as01.epimg.net/futbol/imagenes/2017/04/20/champions/1492688946_929835_1492689857_noticia_normal.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 3,
    name: 'Rakitic',
    image: 'http://www.eumd.es/wp-content/uploads/2016/08/Sevilla-FC-vs-FC-Barcelona-Spanish-Super-Cup-Final-1st-Leg-1.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 4,
    name: 'Busquets',
    image: 'https://www.sportyou.es/blog/wp-content/uploads/2017/02/Sergio-Busquets.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 5,
    name: 'Denis Suarez',
    image: 'https://images.performgroup.com/di/library/goal_es/ca/b0/denis-suarez-barcelona-real-sociedad-copa-del-rey-26012017_13cd1ubixdted1egn5zlu0j80s.jpg?t=-598059215&quality=90&w=1280',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 6,
    name: 'Arda Turan',
    image: 'https://www.sportyou.es/blog/wp-content/uploads/2016/10/arda-turan.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 7,
    name: 'Iniesta',
    image: 'https://www.sportyou.es/blog/wp-content/uploads/2017/01/iniesta.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 8,
    name: 'Luis Suarez',
    image: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9253433/844990382.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionCardId: 1
  }, {
    id: 9,
    name: 'Messi',
    image: 'https://pbs.twimg.com/media/DDEftlpXsAAlPsb.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionCardId: 1
  }, {
    id: 10,
    name: 'Dembele',
    image: 'http://eldesmarquebarcelona.eldesmarqueporta.netdna-cdn.com/images/stories/2017_18/Barcelona/Plantilla/Dembele/Dembele-debut.jpg',
    ratio: 'rare',
    rank: 'diamond',
    collectionCardId: 1
  }, {
    id: 11,
    name: 'Rafinha',
    image: 'https://i.nextmedia.com.au/Utils/ImageResizer.ashx?n=http%3A%2F%2Fi.nextmedia.com.au%2Ffourfourtwo%2Frafinha-cropped_1w4nsaq4dn19r1odjp52omaf4f.jpg&h=630&w=1120&c=1&s=1',
    ratio: 'medium',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 12,
    name: 'Cillessen',
    image: 'http://www.mundodeportivo.com/r/GODO/MD/p3/Barca/Imagenes/2016/10/10/Recortada/img_pmorata_20160911-112708_imagenes_md_propias_pmorata_cillessen52-167-kJ4H-U41905136962evE-980x554@MundoDeportivo-Web.JPG',
    ratio: 'high',
    rank: 'bronze',
    collectionCardId: 1
  }, {
    id: 13,
    name: 'Mascherano',
    image: 'https://www.sportyou.es/blog/wp-content/uploads/2016/08/Javier-Mascherano.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 14,
    name: 'Paco Alcácer',
    image: 'http://www.fichajes.net/files/paco-alcacer-199840_1_1.png',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 15,
    name: 'Jordi Alba',
    image: 'http://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/04/27/14933102944590.jpg',
    ratio: 'medium',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 16,
    name: 'Digne',
    image: 'https://www.sportyou.es/blog/wp-content/uploads/2016/09/lucas-digne.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 17,
    name: 'Sergi Roberto',
    image: 'http://www.mundodeportivo.com/r/GODO/MD/p4/Barca/Imagenes/2017/07/05/Recortada/img_pmorata_20170308-232623_imagenes_md_propias_pmorata_aj9z6277-133-kPpC-U423919774515yuE-980x554@MundoDeportivo-Web.JPG',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 18,
    name: 'André Gomes',
    image: 'http://diarioroatan.com/wp-content/uploads/2017/08/ca-4.jpg',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 19,
    name: 'Aleix Vidal',
    image: 'http://images.performgroup.com/di/library/GOAL_INTERNATIONAL/87/79/january-transfers-aleix-vidal_1gubcqol5qv7n1w6kxw4ywezyj.jpg?t=1569640360&w=620&h=430',
    ratio: 'high',
    rank: 'silver',
    collectionCardId: 1
  }, {
    id: 20,
    name: 'Umtiti',
    image: 'https://www.sportyou.es/blog/wp-content/uploads/2016/08/Samuel-Umtiti.jpg',
    ratio: 'high',
    rank: 'gold',
    collectionCardId: 1
  }, {
    id: 21,
    name: 'Keylor',
    image: 'http://www.fichajes.net/files/keylor_navas_12_1.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 2
  }, {
    id: 22,
    name: 'Varane',
    image: 'http://latribunamadridista.com/wp-content/uploads/2015/04/Raphael-Varane.jpg',
    ratio: 'low',
    rank: 'gold',
    collectionCardId: 2
  }, {
    id: 23,
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
