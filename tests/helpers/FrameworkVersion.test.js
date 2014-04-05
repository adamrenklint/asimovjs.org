var FrameworkVersion = require('../../lib/helpers/FrameworkVersion');
var Test = require('asimov.js').Test;

Test.run('FrameworkVersion', function (test) {

  var instance;

  test.beforeEach(function () {
    instance = new FrameworkVersion();
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