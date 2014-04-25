var nativeToString = Function.prototype.toString;
var nativeQuerySelector = nativeToString.call(document.querySelector);
var nameRE = /\bquerySelector\b/g;

module.exports = function(context, name){
  if (!context[name]) {
    return false;
  }
  return (
    nativeToString.call(context[name]) ===
    nativeQuerySelector.replace(nameRE, name)
  );
};
