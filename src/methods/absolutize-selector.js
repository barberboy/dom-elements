var attributeName = require('./attribute-name');

module.exports = function (attributeValue) {
  return function (item){
    return '[' + attributeName + '="' + attributeValue + '"] ' + item;
  };
};
