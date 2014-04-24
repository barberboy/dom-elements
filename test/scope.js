var scope = require('../src/scope');
var tape = require('tape');

tape('scope-selector', function (test) {
  function prepend(item){
    return 'foo ' + item
  }
  test.equal(
    scope('a, b, c', prepend),
    'foo a,foo b,foo c'
  )
  test.equal(
    scope('a , b  , c', prepend),
    'foo a,foo b,foo c'
  )
  test.end();
});
