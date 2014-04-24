var pushUniq = require('../src/utils/pushuniq');
var tape = require('tape');

tape('push-uniq', function (test) {
  var pusher = pushUniq();
  var nodes = [
        document.createElement('div'),
        document.createElement('span'),
        document.createElement('i')
      ];
  var secondPusher = pushUniq(nodes);
  var target;
  var targetAgain;
  test.equal(typeof pusher, 'function', 'returns a function');
  target = pusher(nodes);
  test.equal(typeof target, 'object');
  test.equal(target.length, 3);
  targetAgain = pusher(nodes);
  test.equal(target, targetAgain, 'returns the same target');
  test.equal(target.length, 3, 'did not copy twice the elements');
  pusher([document.createElement('em')]);
  test.equal(target.length, 4, 'did copy the new element');
  pusher([nodes[0].cloneNode(true)]);
  test.equal(target.length, 5, 'ignores cloned nodes');
  test.doesNotThrow(function(){
    pusher([1, null, void 0]);
    test.equal(target.length, 5, 'ignores other types');
    pusher([document.createDocumentFragment(), document.createTextNode('')]);
    test.equal(target.length, 5, 'ignores non-element nodes');
  }, 'silently ignores other types');
  test.equal(secondPusher([]).length, 3, 'can take an array when built');
  test.end();
});
