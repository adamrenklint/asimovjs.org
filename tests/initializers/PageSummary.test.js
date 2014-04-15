var PageSummary = require('../../lib/initializers/PageSummary');
var Test = require('asimov.js').Test;

Test.run('PageSummary', function (test) {

  var instance;

  test.beforeEach(function () {
    instance = new PageSummary();
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