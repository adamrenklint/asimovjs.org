var LineCount23 = require('../../lib/commands/LineCount23');
var Test = require('asimov.js').Test;

Test.run('LineCount23', function (test) {

  var instance;

  test.beforeEach(function () {
    instance = new LineCount23();
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