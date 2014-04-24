var methods = require('../src/methods/index');
var tape = require('tape');

tape('query', function (test) {
  var children = [
        '<div class="foo">',
          '<span class="bar"></span>',
          '<i></i>',
        '</div>'
      ];
  var element = document.createElement('div');
  element.className = 'baz';
  document.body.appendChild(element);
  element.innerHTML = children.join('');
  test.equal(
    methods.query.call(element, '.foo'),
    element.children[0]
  );
  test.strictEqual(
    methods.query.call(element, '.baz .foo'),
    null,
    'is scoped'
  );
  test.end();
});
