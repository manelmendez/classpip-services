'use strict';

module.exports = function (app, cb) {

  app.models.CollectionCard.create([{
    id: 1,
    name: 'FCB',
    image: 'img',
    num: '25',
    createdBy: 'default'
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
