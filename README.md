DOM Elements
=============

DOM Elements is a polyfill that allows you to use the `.query` and `.queryAll`
methods newly added to [the DOM Standard]. `queryAll` returns an instance of the new 
[Elements class] which extends Array, allowing you to use map, reduce, filter,
forEach, and the like on the returned elements.

[Elements class]: http://dom.spec.whatwg.org/#collections:-elements
[the DOM Standard]: http://dom.spec.whatwg.org

[![browser support](https://ci.testling.com/barberboy/dom4-elements.png)
](https://ci.testling.com/barberboy/dom4-elements)

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

You can install the `dom4-elements` package with either npm or bower, or directly
download [dom-elements.js] or [dom-elements.min.js] and include them in your project.

    bower install https://github.com/barberboy/dom-elements.git

or 

    npm install dom4-elements

[dom-elements.js]: https://raw.githubusercontent.com/barberboy/dom-elements/0.0.3/lib/dom4-elements.js
[dom-elements.min.js]: https://raw.githubusercontent.com/barberboy/dom-elements/0.0.3/lib/dom4-elements.min.js

You are also welcome to clone the repo directly and use the dom4-elements.js or 
dom4-elements.min.js in the `lib` directory. 

    git clone https://github.com/barberboy/dom-elements
    make init
    make build

### .query(selector)

`.query()` is available on document, documentFragments, individual DOM elements, and
the Elements class. It will return the first descendant element which matches the
selector, or null if there isn't one that matches.

    var siteHeader = document.query('header');
    var active = siteHeader.query('.site-menu .active');

### .queryAll(selector)

.queryAll is available on document, documentFragments, individual DOM elements and
the Elements class. It will return an instance of Elements that contains descendants
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

### Elements class

The Elements class is a subclass of Array that holds DOM elements. It isn't used
directly, but is returned by the .queryAll methods on document, element, and 
elements.

    var sections = document.queryAll("section");
    sections.forEach(function(section){
        // Do something with each section
        section.classList.add('visible');
        section.query('h3').classList.add('visible-heading');
    });

Caveats
-------

* Since we use querySelectorAll and ES5 Array methods, this shim will not work in
  IE8 and below. See our browser support list at
  <https://ci.testling.com/barberboy/dom-elements>.
* This is not a complete implementation and does not have support for CSS selectors
  that start with a child selector. See [Absolutizing a Relative Selector] if you are 
  interested in adding that as an enhancement.

[Absolutizing a Relative Selector]: http://dev.w3.org/csswg/selectors/#absolutizing

To Do
-----

* Add support for child (and sibling?) selectors
* Better tests

License
-------
MIT
