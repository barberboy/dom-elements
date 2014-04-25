var scope = require('../scope');
var supportsScoped = require('../scope/support');
var methods = module.exports = {};
var Elements = require('../elements');
var toArray = require('../utils/to-array');
var attributeName = require('./attribute-name');
var scopeSelector = require('./scope-selector');
var absolutizeSelector = require('./absolutize-selector');
var unique = -1;

methods.query = function(selector){
  return methods.queryAll.call(this, selector)[0] || null;
};

methods.queryAll = function(sourceSelector){
  var element = this;
  var elements;
  var selector;
  var result;
  if(!supportsScoped) {
    element.setAttribute(attributeName, ++unique);
  }
  selector = supportsScoped ?
    scope(sourceSelector, scopeSelector) :
    scope(sourceSelector, absolutizeSelector(unique));
  elements = element.querySelectorAll(selector);
  if (!supportsScoped) {
    element.removeAttribute(attributeName);
  }
  result = new Elements();
  result.push.apply(result, toArray(elements));
  return result;
};

methods.queryAllWrapper = function(selector){
  var elements = this.querySelectorAll(selector);
  var result = new Elements();
  result.push.apply(result, toArray(elements));
  return result;
};

methods.queryWrapper = function(selector){
  return this.querySelector(selector);
};
