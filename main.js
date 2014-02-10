/*
  
  application bootstrap

*/

// Have any quick and dirty options? Set them here
var options = {};
options.baseDir = __dirname;
// options.logVerbose = true;
// options.frameworkDir = '../asimov-framework';
options.meta = require('./package.json');

// And then we start the beast
// var asimov = require('./' + options.frameworkDir +  '/main')(options);
var asimov = require('asimov-framework')(options);