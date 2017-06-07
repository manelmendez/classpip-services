'use strict';

module.exports = function (app, cb) {

  app.models.CollectionCard.create([{
    id: 1,
    name: 'FCB',
    image: 'https://images7.alphacoders.com/344/344752.jpg',
    num: '22',
    createdBy: 'default'
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
