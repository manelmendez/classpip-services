'use strict';

var app = require('../server/server');
var request = require('supertest');

function json(verb, url) {
  return request(app)[verb](url)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/);
}

describe('REST API request', function () {
  before(function (done) {
    require('./start-server');
    done();
  });

  after(function (done) {
    app.removeAllListeners('started');
    app.removeAllListeners('loaded');
    done();
  });

  it('should not allow access without access token', function (done) {
    json('get', '/api/users')
      .expect(401, done);
  });
});

describe('Unexpected Usage', function () {
  it('should not crash the server when posting a bad id', function (done) {
    json('post', '/api/users/foobar')
      .send({})
      .expect(404, done);
  });
});
