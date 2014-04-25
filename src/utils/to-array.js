module.exports = function(nodeList){
  var index = -1;
  var length = nodeList.length;
  var array = Array(length);
  while (++index < length) {
    array[index] = nodeList[index];
  }
  return array;
};
