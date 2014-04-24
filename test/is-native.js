var isNative = require('../src/utils/is-native');
var tape = require('tape');

tape('is-native', function (test) {
  test.equal(isNative(document, 'querySelectorAll'), true);
  test.equal(isNative({foo:function foo(){}}, "foo"), false);
  var object = {};
  function foo(){
    return null;
  };
  foo();
  foo.toString = function(){
    return Function.prototype.toString
      .call(document.querySelector)
      .replace(/\bquerySelector\b/g, 'foo');
  }
  foo.toString();
  object.foo = foo;
  test.equal(isNative(object, "foo"), false, 'no tricked with toString');
  test.end();
});
