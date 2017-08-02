'use strict';
var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Account) {
  //send verification email after registration
  Account
    .afterRemote('create', function(context, account, next) {
      var url = 'http://localhost:3001/login';
      var options = {
        type: 'email',
        to: account.email,
        from: 'costsheets.unitec@gmail.com',
        subject: 'Thanks for registering.',
        template: path.resolve(__dirname, '../../server/views/verify.ejs'),
        redirect: url,
        account: account,
      };

      account.verify(options, function(err, response) {
        if (err) {
          Account.deleteById(account.id);
          return next(err);
        }
      });
      next();
    });

  //send password reset link when requested
  Account.on('resetPasswordRequest', function(info) {
    var url = 'http://localhost:3001/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' + info.accessToken.id + '">here</a> to reset your password';

    Account
      .app
      .models
      .Email
      .send({
        to: info.email,
        from: info.email,
        subject: 'Password reset',
        html: html,
      }, function(err) {
        if (err) {
          return;
        }
        console.log('> sending password reset email to:', info.email);
      });
  });
};
