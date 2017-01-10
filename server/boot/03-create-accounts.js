'use strict';

module.exports = function (app, cb) {

  app.models.Account.create([{
    id: 1,
    username: 'sys-admin',
    password: 'sys-admin',
    name: 'System Administrator',
    email: 'sys-admin@classpip.com'
  }, {
    id: 2,
    username: 'school-admin-1',
    password: 'school-admin-1',
    name: 'School 1 Administrator',
    email: 'school-admin-1@classpip.com',
    schoolId: 1
  }, {
    id: 3,
    username: 'teacher-1',
    password: 'teacher-1',
    name: 'Teacher 1',
    email: 'teacher-1@classpip.com',
    schoolId: 1
  }, {
    id: 4,
    username: 'student-1',
    password: 'student-1',
    name: 'Student 1',
    email: 'student-1@classpip.com',
    schoolId: 1
  }, {
    id: 5,
    username: 'student-2',
    password: 'student-2',
    name: 'Student 2',
    email: 'student-2@classpip.com',
    schoolId: 1
  }, {
    id: 6,
    username: 'school-admin-2',
    password: 'school-admin-2',
    name: 'School 2 Administrator',
    email: 'school-admin-2@classpip.com',
    schoolId: 2
  }, {
    id: 7,
    username: 'teacher-2',
    password: 'teacher-2',
    name: 'Teacher 2',
    email: 'teacher-2@classpip.com',
    schoolId: 2
  }, {
    id: 8,
    username: 'student-3',
    password: 'student-3',
    name: 'Student 3',
    email: 'student-3@classpip.com',
    schoolId: 2
  }, {
    id: 9,
    username: 'student-4',
    password: 'student-4',
    name: 'Student 4',
    email: 'student-4@classpip.com',
    schoolId: 2
  }], function (err) {

    if (err) throw err;
    process.nextTick(cb);
  });
};
