var scopeSelector = require('../src/methods/scope-selector');
var tape = require('tape');

tape('absolutize-selector', function (test) {
  test.equal(scopeSelector('p'), ':scoped p');
  test.equal(scopeSelector('a b c'), ':scoped a b c');
  test.end();
});
