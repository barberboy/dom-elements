// as it is a circular dependency, we need to keep `module.exports` on top.
module.exports = Elements;

var pushUniq = require('../utils/pushuniq');
var elementsPrototype = Elements.prototype = [];
var methods = require('../methods');

function Elements() {}

// Elements.queryAll(selector);
elementsPrototype.queryAll = function (selector) {
  var pusher = pushUniq();
  return this.reduce(function(results, element){
    return pusher(methods.queryAll.call(element, selector));
  }, null);
};

// Elements.query(selector);
elementsPrototype.query = function (selector) {
  return elementsPrototype.queryAll.call(this, selector)[0] || null;
};
