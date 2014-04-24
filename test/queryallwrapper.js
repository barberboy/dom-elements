var methods = require('../src/methods/index');
var tape = require('tape');

tape('query-wrapper', function (test) {
  var fragment = document.createDocumentFragment();
  var element = document.createElement('div');
  element.className = 'baz';
  fragment.appendChild(element);
  test.equal(
    methods.queryWrapper.call(fragment, '.baz'),
    element
  );
  document.body.insertBefore(fragment, document.body.firstChild);
  test.equal(
    methods.queryWrapper.call(document, '.baz'),
    element
  );
  test.strictEqual(
    methods.queryWrapper.call(document, '.not-in-dom'),
    null
  );
  test.end();
});
