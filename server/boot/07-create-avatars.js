'use strict';

module.exports = function (app, cb) {

  app.models.Avatar.create([{
    id: 1,
    name: 'avatar',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/boy-2-256.png'
  }, {
    id: 2,
    name: 'avatar',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-256.png'
  }, {
    id: 3,
    name: 'avatar',
    image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-256.png'
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
