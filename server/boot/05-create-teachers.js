'use strict';

module.exports = function (app, cb) {

  app.models.Teacher.create([{
    id: 1,
    username: 'teacher-1',
    password: 'teacher-1',
    name: 'Teacher',
    surname: '1',
    email: 'teacher-1@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 2
  }, {
    id: 2,
    username: 'teacher-2',
    password: 'teacher-2',
    name: 'Teacher',
    surname: '2',
    email: 'teacher-2@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 2
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
