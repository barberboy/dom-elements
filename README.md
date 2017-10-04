DOM Elements
=============

> ⚠️ Relying on Element#query and Element#queryAll is somewhat risky since they’ve been 
  temporarily [removed from the current DOM Standard] due to significant implementation issues.
  See related discussions on [Stack Overflow] and the [WHATWG's DOM spec] repository on GitHub, 
  and use at your own risk.
  
  
[Removed from the current DOM Standard]: https://github.com/whatwg/dom/commit/10b6cf1ba02806220d5461a3bdb7939728b73635#commitcomment-16881028
[Stack Overflow]: https://stackoverflow.com/questions/23269785/whats-the-difference-between-queryall-and-queryselectorall/38245620#38245620
[WHATWG's DOM spec]: https://github.com/whatwg/dom/issues/39#issuecomment-231056316

DOM Elements is a polyfill that allows you to use the `.query` and `.queryAll`
methods newly added to [the DOM Standard]. `queryAll` returns an instance of the
new [Elements class] which extends Array, allowing you to use map, reduce,
filter, forEach, and the like on the returned elements.

[Elements class]: http://dom.spec.whatwg.org/#collections:-elements
[the DOM Standard]: http://dom.spec.whatwg.org

[![The DOM Elements polyfill supports Internet Explorer 9+, Chrome 15.0+, Firefox 4.0+, Opera 12.0+, Safari 5.0.5+, Mobile Safari 6.0+.](https://ci.testling.com/barberboy/dom-elements.png)](https://ci.testling.com/barberboy/dom-elements)

Background
----------

The DOM Standard added [`.query(relativeSelector)`][query] and [`.queryAll(relativeSelector)`][queryAll]
methods to the ParentNode interface, which is implemented by  Document, Element, and 
DocumentFragment. It also defined a new class, [Elements], which extends Array and also
has `.query` and `.queryAll`.

[Elements]: http://dom.spec.whatwg.org/#collections:-elements
[query]: http://dom.spec.whatwg.org/#dom-parentnode-query
[queryAll]: http://dom.spec.whatwg.org/#dom-parentnode-queryall

Usage
-----

You can install the `dom-elements` package with either npm or bower, or directly
download [dom-elements.js] or [dom-elements.min.js] and include them in your
project.

```sh
bower install dom-elements
```

or

```
npm install dom-elements
```

[dom-elements.js]: https://raw.githubusercontent.com/barberboy/dom-elements/0.1.0/lib/dom-elements.js
[dom-elements.min.js]: https://raw.githubusercontent.com/barberboy/dom-elements/0.1.0/lib/dom-elements.min.js

You are also welcome to clone the repo directly and use the dom-elements.js or
dom-elements.min.js in the `lib` directory.

```sh
git clone https://github.com/barberboy/dom-elements
npm install
npm start
```

### .query(relativeSelector)

`.query()` is available on document, documentFragments, individual DOM elements,
and the Elements class. It will return the first descendant element which
matches the selector, or null if there are zero matches.

```javascript
var siteHeader = document.query('header');
if (siteHeader) {
  var active = siteHeader.query('.site-menu .active');
}
```

### .queryAll(relativeSelector)

.queryAll is available on document, documentFragments, individual DOM elements
and the Elements class. It will return a new instance of Elements containing
descendants that match the passed selector, or an instance with no elements if
there are no matches.

```javascript
var collapsibles = document.queryAll('.collapsible');

collapsibles.forEach(function(collapsible){
  var heading = collapsible.query('h1,h2,h3,h4,h5,h6');
  heading.addEventListener('click', function(event) {
    collapsible.classList.toggle('collapsed');
  }, false);
});
```

The `.query` and `.queryAll` methods are also available on the Elements array returned by `.queryAll`.

```javascript
 var sections = document.queryAll('section');
 var headingLinks = sections.queryAll(':any(h1,h2,h3,h4,h5,h6) a');
```

Caveats
-------

* Since we use querySelectorAll and ES5 Array methods, this shim will not work
  in IE8 and below. See the browser support list at
  <https://ci.testling.com/barberboy/dom-elements>.
* This shim (despite it's name—ha!) does not expose the Elements constructor
  function since there isn't a compelling use-case for instantiating it
  directly.
* **Update:** Support for [Relative Selectors] was added in version
  [0.1.0][issue #2] by @bloodyowl.

[Relative Selectors]: http://dev.w3.org/csswg/selectors/#relative
[issue #2]: https://github.com/barberboy/dom-elements/issues/2

License
-------
MIT
