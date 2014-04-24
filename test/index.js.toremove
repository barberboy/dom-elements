module('Elements');
test("Elements", function( assert ){
  assert.ok(typeof Elements !== "undefined", "Elements class exists.");
  
  assert.ok(new Elements().map, "Elements has .map");
  assert.ok(new Elements().sort, "Elements has .sort");
  assert.ok(new Elements().filter, "Elements has .filter");
  assert.ok(new Elements().forEach, "Elements has .forEach");
  assert.ok(new Elements().reduce, "Elements has .reduce");
  assert.ok(new Elements().reduceRight, "Elements has .reduceRight");

});

module('query/queryAll');
test("document.query", function( assert ) {
  assert.ok(document.query, "document.query exists.");
  
  assert.ok(document.query('main') instanceof Element,
            "document.query() returns a (DOM) Element.");
  assert.deepEqual(document.query('#doesnotexist'), null,
                   "document.query() returns null if no matching element is found.");
  assert.equal(document.querySelector('[role="main"]'), document.query('main'),
               "document.query() returns the first matching element.");

  
  assert.ok(document.queryAll, "document.queryAll exists.");

  assert.ok(document.queryAll("main") instanceof Elements, 'document.queryAll returns an instance of Elements');
  assert.ok(document.queryAll('#doesnotexist') instanceof Elements, "document.queryAll() returns an Elements instance when no match is found.");
  assert.equal(document.queryAll('#doesnotexist').length, 0, "document.queryAll() returns an empty Elements instance when no match is found.");
});

test("element.query", function( assert ) {
  assert.ok(document.body.query, "element.query exists.");
  assert.ok(document.body.queryAll, "element.queryAll exists.");
  
  var fixture = document.getElementById("qunit-fixture");
  var article = fixture.querySelector("article");


  assert.equal(fixture.query("h1"), document.getElementById("site-name"),
               "Element.query() returns the first child that matches the selector.");
  
  assert.equal(article.queryAll("h1").length, 1,
               "Element.queryAll() only returns children that match the selector.");

});

/*
test("relative selectors", function( assert ) {

  try {
    var fixture = document.getElementById("qunit-fixture");
    assert.equal(fixture.queryAll("> *").length,
                 fixture.childElementCount,
                 ".queryAll() with a relative selector should match all the children.");
  }
  catch (err) {
    assert.ok(false, ".query() with a relative selector should not throw an error.");
  }

});
*/

test("documentFragment.query", function( assert ) {
  assert.ok(document.createDocumentFragment().query, "documentFragment.query exists.");
  assert.ok(document.createDocumentFragment().queryAll, "documentFragment.queryAll exists.");
  
  var fragment = document.createDocumentFragment();
  var child = document.createElement('div');
  fragment.appendChild(child);
  fragment.appendChild(document.createElement('span'));

  assert.deepEqual(fragment.query('div'), child, "DocumentFragment.query() returns child elements of the fragment.");
  assert.deepEqual(fragment.queryAll('*').length, 2, "DocumentFragment.queryAll() returns children of the fragment.");
});

test("Elements.query", function( assert ) {
  assert.ok(new Elements().query, "elements.query() exists.");

  
  assert.ok(new Elements().queryAll, "elements.queryAll() exists.");
  
  var fixture = document.getElementById('qunit-fixture');
  var elements = fixture.queryAll('*, main, article');
  
  assert.equal(elements.queryAll('a').length,
               4, "Elements.queryAll does not return duplicate elements.");
  assert.equal(elements.queryAll('*').queryAll('span').length,
               3, "Elements.queryAll does not return duplicate elements.");
});
