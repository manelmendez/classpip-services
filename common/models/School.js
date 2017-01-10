'use strict';

module.exports = function (School) {

  // listSchools
  School.listSchools = function (cb) {
    School.find({
      fields: {
        name: true,
        latitude: true,
        longitude: true
      }
    }, cb);
  };
  School.remoteMethod('listSchools', {
    returns: {
      arg: 'schools',
      type: 'array'
    },
    http: {
      path: '/list-schools',
      verb: 'get'
    }
  });
};
