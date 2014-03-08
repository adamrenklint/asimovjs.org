/*

  root domain middleware class

  ? forward www to naked domain
  forward herokuapp domain to TLD

*/

define([

  './Middleware'

], function (Middleware) {

  var _super = Middleware.prototype;

  return Middleware.extend({

    'use': function (req, res, next) {

      var self = this;
      var host = req.header.host || '';

      if (host.indexOf('asimovjs-org.herokuapp.com') >= 0) {

        res.writeHead(301, {
          'Location': 'http://asimovjs.org' + req.url
        });

        return res.end();
      }

      next();
    }
  });
});