var methods = require('../src/methods/index');
var tape = require('tape');

tape('query-all-wrapper', function (test) {
  var fragment = document.createDocumentFragment();
  var element = document.createElement('div');
  element.className = 'baz';
  fragment.appendChild(element);
  test.equal(
    methods.queryAllWrapper.call(fragment, '.baz')[0],
    element
  );
  test.equal(
    typeof methods.queryAllWrapper.call(fragment, '.baz').query,
    'function',
    'returns an elements instance'
  );
  document.body.insertBefore(fragment, document.body.firstChild);
  test.equal(
    methods.queryAllWrapper.call(document, '.baz')[0],
    element
  );
  test.end();
});
