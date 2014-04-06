var Helper = require('asimov.js').Helper;
var _super = Helper.prototype;

module.exports = Helper.extend({

  'initialize': function () {

    var self = this;
    _super.initialize.apply(self, arguments);
  },

  'run': function (url) {

    var self = this;
    var options = self.opts(arguments);
    url = typeof url === 'string' ? url : self.currentUrl;

    var page = self.options.pages.get(url);

    if (page.children().length) {
      return options.fn(self.currentPage.attributes);
    }

    return '';
  }
});