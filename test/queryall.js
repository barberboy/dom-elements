var methods = require('../src/methods/index');
var tape = require('tape');

tape('query-all', function (test) {
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
    methods.queryAll.call(element, '.foo')[0],
    element.children[0]
  );
  test.equal(
    methods.queryAll.call(element, '.baz .foo')[0],
    void 0,
    'is scoped'
  );
  test.equal(
    methods.queryAll.call(element, '> .foo')[0],
    element.children[0]
  );
  test.equal(
    methods.queryAll.call(element, '> .foo:first-child i')[0].tagName,
    'I'
  );
  test.end();
});
