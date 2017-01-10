'use strict';

/* eslint-disable */
var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

module.exports = function (app, cb) {

  var models = require(path.resolve(__dirname, '../model-config.json'));
  var datasources = require(path.resolve(__dirname, '../datasources.json'));

  function autoUpdateAll() {
    Object.keys(models).forEach(function (key) {
      if (typeof models[key].dataSource != 'undefined') {
        if (typeof datasources[models[key].dataSource] != 'undefined') {
          app.dataSources[models[key].dataSource].autoupdate(key, function (err) {
            if (err) throw err;
            console.log('Model ' + key + ' updated');
          });
        }
      }
    });
  }

  function autoMigrateAll() {
    var modelsLength = Object.keys(models).length;
    var count = 1;

    Object.keys(models).forEach(function (key) {
      if (typeof models[key].dataSource != 'undefined') {
        if (typeof datasources[models[key].dataSource] != 'undefined') {
          app.dataSources[models[key].dataSource].automigrate(key, function (err) {
            if (err) throw err;
            count++;
            if (count === modelsLength) {
              process.nextTick(cb);
            }
          });
        }
      }
    });
  }

  autoMigrateAll();
  // autoUpdateAll();
};

/* eslint-enable */
