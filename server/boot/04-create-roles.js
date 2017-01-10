'use strict';

module.exports = function (app, cb) {

  app.models.Role.create([{
    id: 1,
    name: 'SYS-ADMIN'
  }, {
    id: 2,
    name: 'SCHOOL-ADMIN'
  }, {
    id: 3,
    name: 'TEACHER'
  }, {
    id: 4,
    name: 'STUDENT'
  }], function (err, roles) {

    if (err) throw err;

    roles[0].principals.create({
      principalType: app.models.RoleMapping.USER,
      principalId: 1
    }, function (err) {
      if (err) throw err;
    });

    roles[1].principals.create([{
      principalType: app.models.RoleMapping.USER,
      principalId: 2
    }, {
      principalType: app.models.RoleMapping.USER,
      principalId: 6
    }], function (err) {
      if (err) throw err;
    });

    roles[2].principals.create([{
      principalType: app.models.RoleMapping.USER,
      principalId: 3
    }, {
      principalType: app.models.RoleMapping.USER,
      principalId: 7
    }], function (err) {
      if (err) throw err;
    });

    roles[3].principals.create([{
      principalType: app.models.RoleMapping.USER,
      principalId: 4
    }, {
      principalType: app.models.RoleMapping.USER,
      principalId: 5
    }, {
      principalType: app.models.RoleMapping.USER,
      principalId: 8
    }, {
      principalType: app.models.RoleMapping.USER,
      principalId: 9
    }], function (err) {
      if (err) throw err;
      process.nextTick(cb);
    });
  });
};
