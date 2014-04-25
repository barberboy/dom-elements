var absolutizeSelector = require('../src/methods/absolutize-selector');
var attributeName = require('../src/methods/attribute-name');
var tape = require('tape');

tape('absolutize-selector', function (test) {
  var absolutizer = absolutizeSelector(40);
  test.equal(typeof absolutizer, 'function');
  test.equal(absolutizer('p'), '[' + attributeName + '="40"] p');
  test.equal(absolutizer('a b c'), '[' + attributeName + '="40"] a b c');
  test.end();
});
