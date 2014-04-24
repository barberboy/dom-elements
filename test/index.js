var Elements = require('../src');
var tape = require('tape');

tape('dom-elements', function (test) {
  if ('Element' in window) {
    test.equal(typeof Element.prototype.query, 'function');
    test.equal(typeof Element.prototype.queryAll, 'function');
  }
  if('Document' in window) {
    test.equal(typeof Document.prototype.query, 'function');
    test.equal(typeof Document.prototype.queryAll, 'function');
  }
  if('DocumentFragment' in window) {
    test.equal(typeof DocumentFragment.prototype.query, 'function');
    test.equal(typeof DocumentFragment.prototype.queryAll, 'function');
  }
  test.end();
});
