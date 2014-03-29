var Middleware = require('../../node_modules/asimov.js/lib/server/Middleware');
var _super = Middleware.prototype;

module.exports = Middleware.extend({

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