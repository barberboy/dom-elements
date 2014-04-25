DOM Elements
=============

DOM Elements is a polyfill that allows you to use the `.query` and `.queryAll`
methods newly added to [the DOM Standard]. `queryAll` returns an instance of the new
[Elements class] which extends Array, allowing you to use map, reduce, filter,
forEach, and the like on the returned elements.

[Elements class]: http://dom.spec.whatwg.org/#collections:-elements
[the DOM Standard]: http://dom.spec.whatwg.org

[![browser support](https://ci.testling.com/barberboy/dom-elements.png)
](https://ci.testling.com/barberboy/dom-elements)

Background
----------

The DOM Standard added [query] and [queryAll] methods to the ParentNode interface, which is
implemented by  Document, Element, and DocumentFragment. It also defined a new
class, [Elements], which extends Array and also has query and queryAll.

[Elements]: http://dom.spec.whatwg.org/#collections:-elements
[query]: http://dom.spec.whatwg.org/#dom-parentnode-query
[queryAll]: http://dom.spec.whatwg.org/#dom-parentnode-queryall

Usage
-----

You can install the `dom-elements` package with either npm or bower, or directly
download [dom-elements.js] or [dom-elements.min.js] and include them in your project.

    bower install dom-elements

or

    npm install dom-elements

[dom-elements.js]: https://raw.githubusercontent.com/barberboy/dom-elements/0.1.0/lib/dom-elements.js
[dom-elements.min.js]: https://raw.githubusercontent.com/barberboy/dom-elements/0.1.0/lib/dom-elements.min.js

You are also welcome to clone the repo directly and use the dom-elements.js or
dom-elements.min.js in the `lib` directory.

    git clone https://github.com/barberboy/dom-elements
    npm install
    npm start

### .query(selector)

`.query()` is available on document, documentFragments, individual DOM elements, and
the Elements class. It will return the first descendant element which matches the
selector, or null if there isn't one that matches.

    var siteHeader = document.query('header');
    var active = siteHeader.query('.site-menu .active');

### .queryAll(selector)

.queryAll is available on document, documentFragments, individual DOM elements and
the Elements class. It will return a new instance of Elements containing descendants
that match the passed selector, or an instance with no elements if there are no matches.

    var collapsibles = document.queryAll('.collapsible');
    collapsibles.forEach(function(collapsible){
      var heading = collapsible.query('h1,h2,h3,h4,h5,h6');
      heading.addEventListener('click', function(event) {
        collapsible.classList.toggle('collapsed');
      }, false);
    });

    // .query and .queryAll are available on the Elements array as well.
    var sections = document.queryAll('section');
    var headingLinks = sections.queryAll(':any(h1,h2,h3,h4,h5,h6) a');

Caveats
-------

* Since we use querySelectorAll and ES5 Array methods, this shim will not work in
  IE8 and below. See our browser support list at
  <https://ci.testling.com/barberboy/dom-elements>.
* This shim (despite it's name—ha!) does not expose the Elements constructor
  function since there isn't a compelling use-case for instantiating it
  directly.
* Support for [Relative Selectors] was added in version [0.1.0][issue #2] by
  @bloodyowl.


[Relative Selectors]: http://dev.w3.org/csswg/selectors/#relative
[issue #2]: https://github.com/barberboy/dom-elements/issues/2


License
-------
MIT
