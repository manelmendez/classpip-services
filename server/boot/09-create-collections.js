'use strict';

module.exports = function (app, cb) {

  app.models.CollectionCards.create([{
    id: 1,
    name: 'FCB',
    image: 'img',
    num: 25,
    createdBy: 'default'
  }], function (err, collectionCards) {
    if (err) throw err;

    app.models.Card.create([{
      id: 1,
      name: 'Ter Stegen',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.20',
      rank: 'gold'
    }, {
      id: 3,
      name: 'Piqué',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.15',
      rank: 'gold'
    }, {
      id: 4,
      name: 'Rakitic',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 5,
      name: 'Busquets',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 6,
      name: 'Denis Suarez',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 7,
      name: 'Arda Turan',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 8,
      name: 'Iniesta',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 9,
      name: 'Luis Suarez',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 10,
      name: 'Messi',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 11,
      name: 'Neymar',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 12,
      name: 'Rafinha',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 13,
      name: 'Cillessen',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 14,
      name: 'Mascherano',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 17,
      name: 'Paco Alcácer',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 18,
      name: 'Jordi Alba',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 19,
      name: 'Digne',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 20,
      name: 'Sergi Roberto',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 21,
      name: 'André Gomes',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 22,
      name: 'Aleix Vidal',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 23,
      name: 'Umtiti',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 24,
      name: 'Mathieu',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }, {
      id: 25,
      name: 'Masip',
      image: 'img',
      collectionId: 'FCB',
      ratio: '0.30',
      rank: 'gold'
    }], function (err, card) {
      if (err) throw err;

      collectionCards[0].card.add(card[0], function (err) {
        if (err) throw err;
        collectionCards[0].card.add(card[1], function (err) {
          if (err) throw err;
          collectionCards[0].card.add(card[2], function (err) {
            if (err) throw err;
            collectionCards[0].card.add(card[3], function (err) {
              if (err) throw err;
              collectionCards[0].card.add(card[4], function (err) {
                if (err) throw err;
                collectionCards[0].card.add(card[5], function (err) {
                  if (err) throw err;
                  collectionCards[0].card.add(card[6], function (err) {
                    if (err) throw err;
                    collectionCards[0].card.add(card[7], function (err) {
                      if (err) throw err;
                      collectionCards[0].card.add(card[8], function (err) {
                        if (err) throw err;
                        collectionCards[0].card.add(card[9], function (err) {
                          if (err) throw err;
                          collectionCards[0].card.add(card[10], function (err) {
                            if (err) throw err;
                            collectionCards[0].card.add(card[11], function (err) {
                              if (err) throw err;
                              collectionCards[0].card.add(card[12], function (err) {
                                if (err) throw err;
                                collectionCards[0].card.add(card[13], function (err) {
                                  if (err) throw err;
                                  collectionCards[0].card.add(card[14], function (err) {
                                    if (err) throw err;
                                    collectionCards[0].card.add(card[15], function (err) {
                                      if (err) throw err;
                                      collectionCards[0].card.add(card[16], function (err) {
                                        if (err) throw err;
                                        collectionCards[0].card.add(card[17], function (err) {
                                          if (err) throw err;
                                          collectionCards[0].card.add(card[18], function (err) {
                                            if (err) throw err;
                                            collectionCards[0].card.add(card[19], function (err) {
                                              if (err) throw err;
                                              collectionCards[0].card.add(card[20], function (err) {
                                                if (err) throw err;
                                                collectionCards[0].card.add(card[21], function (err) {
                                                  if (err) throw err;
                                                  process.nextTick(cb);
                                                })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  });
};
