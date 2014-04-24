var methods = require('./methods');
var isNative = require('./utils/isNative');

if (typeof Document === 'undefined'
      || !('map' in arrayPrototype)
      || !('reduce' in arrayPrototype)
      || !('querySelectorAll' in document)) {
  throw new TypeError('Missing browser features to initiantiate dom-elements');
}

if('Element' in window) {
  if(!isNative(Element.prototype, 'query')) {
    Element.prototype.query = methods.query;
  }
  if(!isNative(Element.prototype, 'queryAll')) {
    Element.prototype.queryAll = methods.queryAll;
  }
}


['Document', 'DocumentFragment'].forEach(function (ParentNode) {
  var prototype;
  // Don't throw errors if these globals don't exist — just move on.
  if (!(ParentNode in window)) {
    return;
  }
  prototype = window[ParentNode].prototype;
  if (!isNative(prototype, 'query')) {
    prototype.query = methods.queryWrapper;
  }
  if (!isNative(prototype, 'queryAll')) {
    prototype.queryAll = methods.queryAllWrapper;
  }
});
