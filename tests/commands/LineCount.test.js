var LineCount = require('../../lib/commands/LineCount');
var Test = require('asimov.js').Test;

Test.run('LineCount', function (test) {

  var instance;

  test.beforeEach(function () {
    instance = new LineCount();
  });

  test.afterEach(function () {
    instance.destroy();
  });

//  test.spec('method ()', function () {
//
//    test.it('should be true', function () {
//      expect(true).to.be.true;
//    });
//  });
});