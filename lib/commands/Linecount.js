var Command = require('asimov.js').Command;
var _super = Command.prototype;

module.exports = Command.extend({

  'initialize': function () {

    var self = this;
    _super.initialize.apply(self, arguments);

    var started = new Date();
    var filesystem = self.filesystem;
    var startPath = process.cwd() + '/lib';
    self.count = 0;

    filesystem.readDirectory(startPath, self.countLines);

    self.logger.since(self.namespace, 'Counted a total of ' + self.count  + ' line(s)', started);
  },

  'countLines': function (path) {

    var self = this;
    var filesystem = self.filesystem;

    if (filesystem.isDirectory(path)) {
      filesystem.readDirectory(path, self.countLines);
    }
    else if (filesystem.hasFileExtension(path, 'js')) {
      var lines = filesystem.readFile(path).toString().split('\n');
      self.count += lines.length;
    }
  }
});