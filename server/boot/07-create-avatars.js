'use strict';

module.exports = function (app, cb) {

  app.models.Avatar.create({
    id: 1,
    name: 'avatar',
    image: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-128.png'
  }, function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
