var Helper = require('asimov.js').Helper;

module.exports = Helper.extend({

  'run': function () {

    var self = this;
    return self.options.pkg.version;
  }
});