var Helper = require('asimov.js').Helper;
var _super = Helper.prototype;

module.exports = Helper.extend({

  'run': function (url, params, block) {

    var self = this;
    url = typeof url === 'string' ? url : self.currentUrl;

    var page = self.options.pages.get(url);

    if (page.children().length) {
      return block();
    }

    return '';
  }
});