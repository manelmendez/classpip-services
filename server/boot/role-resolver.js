// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

module.exports = function (app) {
  var Role = app.models.Role;

  Role.registerResolver('schoolMember', function (role, context, cb) {
    function reject() {
      process.nextTick(function () {
        cb(null, false);
      });
    }

    // if the target model is not school
    if (context.modelName !== 'School') {
      return reject();
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }

    // check if userId is in school table for the given school id
    context.model.findById(context.modelId, function (err, school) {
      if (err || !school) {
        return reject();
      }

      var Account = app.models.Account;
      Account.count({
        id: userId,
        schoolId: context.modelId
      }, function (err, count) {
        if (err) {
          return cb(null, false);
        }
        cb(null, count > 0); // true = is a school member
      });
    });
  });
};
