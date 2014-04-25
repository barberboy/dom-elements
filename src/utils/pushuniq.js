var Elements = require('../elements');
var expando = require('./expando');
var propertyName = 'domElementsId' + expando;
var id = -1;

/**
 * pushUniq
 *
 * returns a function that pushes elements not yet in `target`.
 * as the internal API only uses it before making the array
 * available, we can use a `map` cache to store the elements
 * already in the newly built array, letting us prevent extensive looping.
 */
module.exports = function (original) {
  var target = new Elements();
  var map = {};

  function pusher(source) {
    var index = -1;
    var length = source.length;
    var item;
    while (++index < length) {
      item = source[index];
      if (!item || item.nodeType !== 1) {
        continue;
      }
      if (propertyName in item && map.hasOwnProperty(item[propertyName])) {
        continue;
      }
      item[propertyName] = ++id;
      map[id] = 1;
      target.push(item);
    }
    return target;
  }

  if(arguments.length) {
    pusher(original);
  }

  return pusher;
};
