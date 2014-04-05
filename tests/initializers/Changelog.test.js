var Changelog = require('../../lib/initializers/Changelog');
var Test = require('asimov.js').Test;

Test.run('Changelog', function (test) {

  var instance;

  test.beforeEach(function () {
    instance = new Changelog();
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