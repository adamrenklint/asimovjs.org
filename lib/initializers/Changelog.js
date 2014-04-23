var Initializer = require('asimov.js').Initializer;
var _super = Initializer.prototype;
var npath = require('path');

module.exports = Initializer.extend({

  'run': function (next) {

    var self = this;
    var pages = self.options.pages;
    var started = new Date();

    var path = npath.join(self.options.frameworkDir, 'CHANGELOG.md');
    var changelog = self.filesystem.readFile(path).toString();
    changelog = changelog.replace(/{{/g, '%cl%').replace(/}}/g, '%cr%').replace('# Changelog', '');

    pages.add({
      'path': '/docs/changelog/page.txt',
      'position': 99,
      'title': 'Changelog',
      'raw': 'text:\n' + changelog
    });

    self.logger.since(self.namespace, 'Loaded asimov.js changelog', started);

    next();
  }
});