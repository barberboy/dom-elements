(function () {

  var arrayProto = Array.prototype;

  // Sanity check for support:
  if (typeof (Document) === 'undefined' || !arrayProto.forEach || !document.querySelector) {
    return;
  }

  // ParentNode.query(selector);
  var query = function query(selector) {
    return this.querySelector(selector);
  };
  // ParentNode.queryAll(selector)
  var queryAll = function queryAll(selector) {
    var matches = this.querySelectorAll(selector);
    var elements = new Elements(matches);
    return elements;
  };

  // Add query and queryAll to classes that implement ParentNode
  ['Document', 'DocumentFragment', 'Element'].forEach(function (ParentNode) {
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

    // Push unique function
    var push_uniq = function (a, b) {
      for (var i = 0, mx = b.length; i < mx; ++i) {
        var el = b[i];
        if (a.indexOf(el) === -1) {
          a.push(el);
        }
      }
      return a;
    };

    // Elements constructor
    this.Elements = Elements = function Elements(elements) {
      if (elements) {
        push_uniq(this, elements);
      }
    };
    // Borrow methods from Array.prototype
    Object.getOwnPropertyNames(arrayProto).forEach(function (fn) {
      Elements.prototype[fn] = arrayProto[fn];
    });
    // Elements.queryAll(selector);
    Elements.prototype.queryAll = function (selector) {
      var mapped = this.map(function (el) {
        return el.queryAll(selector);
      });
      var reduced = mapped.reduce(push_uniq, new Elements());
      return reduced;
    };
    // Elements.query(selector);
    Elements.prototype.query = function (selector) {
      return this.queryAll(selector)[0];
    };
  }

})();