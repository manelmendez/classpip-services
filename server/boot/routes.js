'use strict';
var multer  = require('multer');
/* eslint-disable */
module.exports = function (app) {

  var Account = app.models.Account;

  var router = app.loopback.Router();
  router.get('/', app.loopback.status());
  app.use(router);

  //verified
  app.get('/verified', function (req, res) {
    res.render('verified');
  }); //send an email with instructions to reset an existing user's password
  app.post('/request-password-reset', function (req, res, next) {
    Account.resetPassword({
      email: req.body.email
    }, function (err) {
      if (err) return res.status(401).send(err);

      res.render('response', {
        title: 'Password reset requested',
        content: 'Check your email for further instructions',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });

  //show password reset form
  app.get('/reset-password', function (req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    res.render('password-reset', {
      accessToken: req.accessToken.id
    });
  });

  //reset the user's pasword
  app.post('/reset-password', function (req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);

    //verify passwords match
    if (!req.body.password ||
      !req.body.confirmation ||
      req.body.password !== req.body.confirmation) {
      return res.sendStatus(400, new Error('Passwords do not match'));
    }

    Account.findById(req.accessToken.userId, function (err, user) {
      if (err) return res.sendStatus(404);
      user.updateAttribute('password', req.body.password, function (err, user) {
        if (err) return res.sendStatus(404);
        console.log('> password reset processed successfully');
        res.render('response', {
          title: 'Password reset success',
          content: 'Your password has been reset successfully',
          redirectTo: '/',
          redirectToLinkText: 'Log in'
        });
      });
    });
  });
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './collectionTmp')
    },
    filename: function (req, file, cb) {
      cb(null, req.body.fileName)
    }
  });

  var upload = multer({ storage: storage });
  app.post('/upload', upload.single('file'), function(req, res) {
    return res.end("/collectionTmp/"+req.body.fileName);
  });
};
/* eslint-enable */
