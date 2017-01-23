'use strict';

module.exports = function (app, cb) {

  app.models.Student.create([{
    id: 1,
    username: 'student-1',
    password: 'student-1',
    name: 'Student',
    surname: '1',
    email: 'student-1@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 1
  }, {
    id: 2,
    username: 'student-2',
    password: 'student-2',
    name: 'Student',
    surname: '2',
    email: 'student-2@classpip.com',
    emailVerified: 1,
    schoolId: 1,
    avatarId: 1
  }, {
    id: 3,
    username: 'student-3',
    password: 'student-3',
    name: 'Student',
    surname: '3',
    email: 'student-3@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 1
  }, {
    id: 4,
    username: 'student-4',
    password: 'student-4',
    name: 'Student',
    surname: '4',
    email: 'student-4@classpip.com',
    emailVerified: 1,
    schoolId: 2,
    avatarId: 1
  }], function (err, students) {
    if (err) throw err;

    app.models.Badge.create([{
      id: 1,
      name: 'badge 1',
      image: 'https://cdn2.iconfinder.com/data/icons/web2/Icons/Favorite_128x128.png',
      points: 10
    }, {
      id: 2,
      name: 'badge 2',
      image: 'https://cdn2.iconfinder.com/data/icons/web2/Icons/Misterwong_128x128.png',
      points: 20
    }], function (err, badges) {
      if (err) throw err;

      // Assign badges to students
      students[0].badges.add(badges[0], function (err) {
        if (err) throw err;
        students[0].badges.add(badges[1], function (err) {
          if (err) throw err;
          students[1].badges.add(badges[0], function (err) {
            if (err) throw err;
            students[2].badges.add(badges[1], function (err) {
              if (err) throw err;

              app.models.Group.create([{
                id: 1,
                name: 'Group 1',
                teacherId: 1,
                gradeId: 1,
                matterId: 1
              }, {
                id: 2,
                name: 'Group 2',
                teacherId: 2,
                gradeId: 1,
                matterId: 2
              }], function (err, groups) {

                groups[0].students.add(students[0], function (err) {
                  if (err) throw err;
                  groups[0].students.add(students[1], function (err) {
                    if (err) throw err;
                    groups[1].students.add(students[2], function (err) {
                      if (err) throw err;
                      groups[1].students.add(students[3], function (err) {
                        if (err) throw err;
                        process.nextTick(cb);
                      })
                    })
                  })
                })
              });
            })
          })
        })
      })
    });
  });
};
