var nativeToString = Function.prototype.toString;
var nativeQuerySelector = nativeToString.call(document.querySelector);
var nameRE = /\bquerySelector\b/g;

module.exports = function(context, name){
  return (
    nativeToString.call(context[name]) ===
    nativeQuerySelector.replace(nameRE, name)
  );
};
