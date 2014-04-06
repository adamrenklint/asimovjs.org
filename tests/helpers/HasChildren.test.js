var HasChildren = require('../../lib/helpers/HasChildren');
var Test = require('asimov.js').Test;

Test.run('HasChildren', function (test) {

  var instance;

  test.beforeEach(function () {
    instance = new HasChildren();
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