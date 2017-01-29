'use strict';

module.exports = function (app, cb) {

  app.models.SchoolAdmin.create([{
    id: 1,
    username: 'school-admin-1',
    password: 'school-admin-1',
    name: 'School 1',
    surname: 'Administrator',
    email: 'school-admin-1@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 3
  }, {
    id: 2,
    username: 'school-admin-2',
    password: 'school-admin-2',
    name: 'School 2',
    surname: 'Administrator',
    email: 'school-admin-2@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 3
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
