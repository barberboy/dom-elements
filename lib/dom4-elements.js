(function () {

  var arrayPrototype = Array.prototype;

  // Sanity check for support:
  if (typeof (Document) === 'undefined'
        || !('map' in arrayPrototype)
        || !('reduce' in arrayPrototype)
        || !('querySelectorAll' in document)) {
    return;
  }

  // Push items from b onto a if they don't already exist in a, then return a.
  var push_uniq = function (a, b) {
    for (var i = 0, mx = b.length; i < mx; ++i) {
      var item = b[i];
      if (a.indexOf(item) === -1) {
        a.push(item);
      }
    }
    return a;
  };

  // ParentNode.query(selector);
  var query = function query(selector) {
    return this.querySelector(selector);
  };
  // ParentNode.queryAll(selector)
  var queryAll = function queryAll(selector) {
    var matches = this.querySelectorAll(selector);
    var elements = push_uniq(new Elements(), matches);
    return elements;
  };

  // Add query and queryAll to classes that implement ParentNode
  ['Document', 'DocumentFragment', 'Element'].forEach(function (ParentNode) {
    // Don't throw errors if these globals don't exist — just move on.
    if (!(ParentNode in this)) {
      return;
    }
    var prototype = this[ParentNode].prototype;
    if (!('query' in prototype)) {
      prototype.query = query;
    }
    if (!('queryAll' in prototype)) {
      prototype.queryAll = queryAll;
    }
  });

  // class Elements
  if (!('Elements' in this)) {
    // Elements constructor function
    function Elements() {}
    // Elements prototype object
    var elementsPrototype = Elements.prototype = new Array();

    // Elements.queryAll(selector);
    elementsPrototype.queryAll = function (selector) {
      var mapped = this.map(function (el) {
        return el.queryAll(selector);
      });
      var reduced = mapped.reduce(push_uniq, new Elements());
      return reduced;
    };
    // Elements.query(selector);
    elementsPrototype.query = function (selector) {
      return this.queryAll(selector)[0];
    };

    // Add Elements class to global namespace.
    this.Elements = Elements;
  }

})();
