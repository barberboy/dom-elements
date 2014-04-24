var separateSelector = require('../utils/separate-selector');

module.exports = function(selector, method){
  var selectors = separateSelector(selector);
  var scopedSelectors = selectors.map(method);
  return scopedSelectors.join();
};
