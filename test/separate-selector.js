var separateSelector = require('../src/utils/separate-selector');
var tape = require('tape');

tape('separate-selector', function (test) {
  test.deepEqual(
    separateSelector('p'),
    ['p']
  );
  test.deepEqual(
    separateSelector(' p  '),
    [' p  ']
  );
  test.deepEqual(
    separateSelector('a, b, c'),
    ['a','b','c']
  );
  test.deepEqual(
    separateSelector('a , b , c'),
    ['a','b','c']
  );
  test.deepEqual(
    separateSelector('a,b,c'),
    ['a','b','c']
  );
  test.end();
});
