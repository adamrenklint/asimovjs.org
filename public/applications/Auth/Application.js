/*
  
  Auth application class

  handle login, signup and reset password

*/

define([

  'asimov/Application'

], function (Application) {

  var _super = Application.prototype;

  return Application.extend({

    'initialize': function () {

      var self = this;
      _super.initialize.apply(self, arguments);
    }
  });
});