var LineCount2 = require('../../lib/commands/LineCount2');
var Test = require('asimov.js').Test;

Test.run('LineCount2', function (test) {

  var instance;

  test.beforeEach(function () {
    instance = new LineCount2();
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