var Elements = require('../src/elements');
var tape = require('tape');

tape('elements', function (test) {
  var elements = new Elements();
  test.equal(elements.length, 0, 'has a length');
  test.equal(Array.prototype.isPrototypeOf(elements), true, 'inherits from array prototype');
  test.end();
});

tape('elements query', function (test) {
  var elements = new Elements();
  var element = document.createElement('div');
  element.innerHTML = '<i></i>';
  elements.push(element);
  elements.push(element.cloneNode(true));
  test.equal(elements.query('div i'), null);
  test.equal(elements.query('i').nodeName, 'I', null);
  test.end();
});

tape('elements query-all', function (test) {
  var elements = new Elements();
  var element = document.createElement('div');
  var query;
  element.innerHTML = '<i></i>';
  elements.push(element);
  elements.push(element.cloneNode(true));
  test.equal(elements.queryAll('div i').length, 0);
  test.equal(typeof elements.queryAll('div i').query, "function");
  test.equal(typeof elements.queryAll('div i').queryAll, "function");
  query = elements.queryAll('i');
  test.equal(query.length, 2);
  test.notEqual(query[0], query[1]);
  test.end();
});
