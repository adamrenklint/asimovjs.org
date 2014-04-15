var ActiveAncestor = require('../../lib/helpers/ActiveAncestor');
var Test = require('asimov.js').Test;

Test.run('ActiveAncestor', function (test) {

  var instance;

  test.beforeEach(function () {
    instance = new ActiveAncestor();
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