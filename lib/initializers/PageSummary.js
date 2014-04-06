var Initializer = require('asimov.js').Initializer;
var _super = Initializer.prototype;

module.exports = Initializer.extend({

  'updateSummary': function (model) {

    var self = this;
    model.set('summary', model.attributes.text.split('\n')[0]);
  },

  'run': function (next) {

    var self = this;
    var pages = self.options.pages;

    self.bindTo(pages, 'change:text', 'updateSummary');
    pages.models.forEach(self.updateSummary);

    next();
  }
});