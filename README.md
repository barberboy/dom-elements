DOM4 Elements
=============

A polyfill for the [Elements class] in [DOM Level 4], as well as `.query` and `.queryAll`
methods for Elements, Element, Document, and DocumentFragment.

[![browser support](https://ci.testling.com/barberboy/dom4-elements.png)
](https://ci.testling.com/barberboy/dom4-elements)

[Elements class]: http://www.w3.org/TR/dom/#collections:-elements
[DOM Level 4]: http://www.w3.org/TR/dom/

Background
----------

DOM 4 added [query] and [queryAll] methods to Document, Element, and DocumentFragment
which return a new class, [Elements], that extends Array. This allows you to 
use map, filter, reduce, forEach, and the like directly on the elements array
returned from `.queryAll`.

[Elements]: http://www.w3.org/TR/dom/#collections:-elements
[query]: http://www.w3.org/TR/dom/#dom-parentnode-query
[queryAll]: http://www.w3.org/TR/dom/#dom-parentnode-queryall

Usage
-----

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

    var collapsible = document.queryAll('.collapsible');
    collapsible.forEach(function(section){
      var heading = section.query('h1,h2,h3,h4,h5,h6');
      heading.addEventListener('click', function(event) {
        section.classList.toggle('collapsed');
      }, false);
    });

    // .query and .queryAll are available on the Elements array as well.
    var sections = document.queryAll('section');
    var headingLinks = sections.queryAll(':any(h1,h2,h3,h4,h5,h6) a');

### Elements (class)

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

* Since we use querySelectorAll and ES5 Array methods, this shim will not work in IE8
  and below.
* This is not a complete implemantation, and does not have support for CSS selectors
  that start with a child selector. See [Absolutizing a Relative Selector] if you are 
  interested in adding that as an enhancement.
* For convenience, the Elements constructor can accept a NodeList containing elements
  to wrap. This is non-standard behavior and should not be used. Since we don't
  redefine Elements if it exists, your code will break when browsers implement
  Elements.

[Absolutizing a Relative Selector]: http://dev.w3.org/csswg/selectors/#absolutizing

To Do
-----

* Add support for child (and sibling?) selectors
* Better tests

License
-------
MIT
